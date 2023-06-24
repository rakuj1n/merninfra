import * as usersAPI from './users-api'

export default async function signUp(userData) {
    console.log("users-service")
    const token = await usersAPI.signUp(userData)
    return token
}