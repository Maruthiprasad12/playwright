import { test, expect } from '@playwright/test';

test('verify list of users', async ({ request }) => {
    // const url = "https://reqres.in/api/users?page=2"
    const headers = {
        'x-api-key': 'reqres-free-v1'

    };

    const response = await request.get('https://reqres.in/api/users?page=2',
        { headers }
    );

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log(data);
    expect(response.data[0].last_name).toBe("Lawson")


})
// test('verify add emp', async ({ request }) => {
//     const headers = {
//         'x-api-key': 'reqres-free-v1'
//     };

//     const response = await request.get(
//         'https://reqres.in/api/users',
//         { headers }
//     );

//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBe(201);

//     const data = await response.json();
//     console.log(data);

// })