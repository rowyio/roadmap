export const checkEnvironmentVariables = () => {
  if (!process.env.CLIENT_FIREBASE_WEB_API_KEY) {
    return new Error("CLIENT_FIREBASE_CONFIG");
  }
  if (!process.env.SERVER_FIREBASE_SERVICE_ACCOUNT) {
    return new Error("SERVER_FIREBASE_SERVICE_ACCOUNT");
  }
  if (!process.env.SESSION_SECRET) {
    return new Error("SESSION_SECRET");
  }
};
