import { Account,Client,Storage,Avatars, Databases } from "appwrite";

export const AppwriteConfig={
    projectId:'661a0b9974d1c5e470b4',
    url:'https://cloud.appwrite.io/v1',
 
}
export const client=new Client();

client.setProject(AppwriteConfig.projectId)
client.setEndpoint(AppwriteConfig.url);




export const account=new Account(client);


export const databases=new Databases(client);
export const storage=new Storage(client);
export const avatars=new Avatars(client);