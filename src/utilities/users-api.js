const BASE_URL = '/api/users'

export async function signUp(userData) {
    console.log("users-api")
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    if (res.ok) {
        console.log("post successful")
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
}