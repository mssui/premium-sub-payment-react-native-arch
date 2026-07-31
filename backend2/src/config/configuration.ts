export const configuration = () => ({
  port: parseInt(process.env.PORT ?? '3004', 10),

  database: {
    url: process.env.DATABASE_URL,
  },

  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  },
});