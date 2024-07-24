const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwriteUsersAvatarCollectionId: String(
    import.meta.env.VITE_USERS_AVATAR_COLLECTION_ID
  ),
  appwriteAvatarImagesBucketId: String(
    import.meta.env.VITE_USERS_AVATAR_BUCKET_ID
  ),
  editorApiKey: String(import.meta.env.VITE_RTE_KEY),
};

export default conf;
