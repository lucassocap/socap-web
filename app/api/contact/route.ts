import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message, interest } = body;

        // 1. Validate basic input
        if (!email || !name) {
            return NextResponse.json(
                { error: 'Name and Email are required' },
                { status: 400 }
            );
        }

        const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
        if (!accessToken) {
            console.error('HubSpot Access Token not configured');
            // Allow success in dev mode if no token, for UI testing
            if (process.env.NODE_ENV === 'development') {
                console.warn('Mocking HubSpot success in development');
                return NextResponse.json({ success: true, contactId: 'mock-id' });
            }
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Split name
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

        // 2. Create or Update Contact
        const contactProperties = {
            email,
            firstname: firstName,
            lastname: lastName,
            company,
            website: company.includes('.') ? company : undefined,
            lifecyclestage: 'lead'
        };

        let contactId;

        try {
            const createResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ properties: contactProperties })
            });

            const createData = await createResponse.json();

            if (createResponse.ok) {
                contactId = createData.id;
            } else if (createResponse.status === 409) {
                // Contact already exists
                const searchResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({
                        filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }]
                    })
                });
                const searchData = await searchResponse.json();
                if (searchData.results && searchData.results.length > 0) {
                    contactId = searchData.results[0].id;
                }
            } else {
                console.error('HubSpot Create Error:', createData);
                throw new Error('Failed to create contact');
            }

        } catch (e) {
            console.error('HubSpot Contact flow error:', e);
            return NextResponse.json({ error: 'Failed to process contact' }, { status: 500 });
        }

        // 3. Create Note (Engagement)
        if (contactId) {
            const noteBody = `
            <p><strong>SOCAP PROTOCOL INITIATED</strong></p>
            <p><strong>Interest:</strong> ${interest?.toUpperCase()}</p>
            <p><strong>Context:</strong></p>
            <p>${message || 'No specific context provided.'}</p>
        `;

            await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    properties: {
                        hs_timestamp: new Date().toISOString(),
                        hs_note_body: noteBody
                    },
                    associations: [
                        {
                            to: { id: contactId },
                            types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }]
                        }
                    ]
                })
            });
        }

        // 4. Create Deal (Opportunity)
        if (contactId) {
            let tag = '[SOCAP: GEN]';
            if (interest === 'capital') tag = '[SOCAP: CAP]';
            if (interest === 'consulting') tag = '[SOCAP: OPS]';

            const dealName = `${tag} ${company}`;

            await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    properties: {
                        dealname: dealName,
                        pipeline: 'default',
                        dealstage: 'appointmentscheduled',
                    },
                    associations: [
                        {
                            to: { id: contactId },
                            types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }]
                        }
                    ]
                })
            });
        }

        return NextResponse.json({ success: true, contactId });

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
