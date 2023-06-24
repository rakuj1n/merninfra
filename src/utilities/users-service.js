import * as usersAPI from './users-api'

export async function signUp(userData) {
    console.log("users-service")
    const token = await usersAPI.signUp(userData)
    console.log("users-service succesful")
    return token
}