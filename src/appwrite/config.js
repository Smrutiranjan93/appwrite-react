import { Client, Databases, Account ,Storage,Query} from "appwrite";

import conf from '../conf/conf.js'
export class Service{
     client=new Client();
     databases;
     bucket;
     constructor(){
        this.client.setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("66b6f53700323ad8ed62");
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
     }
     async createPost({title,slug,content,featuredImage,status,userID}){
      try{
        return await this.databases.createDocument(
       conf.appwriteDatabaseId,
       conf.appwriteCollectionId,
      slug,
      {
         title,
         content,
         featuredImage,
         status,
         userID
      }
        )
      } catch(error){
         console.log('error'.error)

      }
     }
     async updatePost(slug,{title,content,featuredImage,status}){
      try{
         console.log(conf.appwriteDatabaseId)
         return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,{
               title,
               featuredImage,
               status,
               content

            }
         )
      }catch(error){
         console.log('error',error)
      }
     }
}
const service=new Service()
export default service