import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66b6f53700323ad8ed62");
 

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
