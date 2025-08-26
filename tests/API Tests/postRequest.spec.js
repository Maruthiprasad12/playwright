import { test, expect } from "@playwright/test"

test('create employeee', async ({ request }) => {
    const headers = {
        'x-api-key': 'reqres-free-v1'

    }
    const data = { 
          data: {
            "name": "Maruthi",
            "job": "Tester"
        }

    }

    const createEMP = await request.post('https://reqres.in/api/users', {
        headers,data
    })
    expect (createEMP.ok()).toBeTruthy()
    expect(createEMP.status()).toBe(201)

})