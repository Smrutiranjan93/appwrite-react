// const conf = {
//   appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
//   appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
//   appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
//   appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
// };
const conf = {
  appwriteUrl: "https://cloud.appwrite.io/v1",
  appwriteProjectId: "66b6f53700323ad8ed62",
  appwriteDatabaseId: "66b9b8d10013153c1c1c",
  appwriteCollectionId: "66b9b9340039b2abb0c7",
  appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};
console.log(conf);
export default conf;
