import { ID } from "appwrite"
import { account } from "./config"

export async function createUser(user:{
    name:string,
    password:string,
    username:string,
    email:string,
}){
try {
    const newAccount=await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.name,

    )
    return newAccount
} catch (error) {
    return error
}
}