[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frowyio%2Froadmap&env=CLIENT_FIREBASE_CONFIG,SERVER_FIREBASE_SERVICE_ACCOUNT,SESSION_SECRET,COLLECTION,TABLE_ID&project-name=rowy-roadmap&repository-name=rowy-roadmap)

Environment variables: 
```
// https://console.firebase.google.com/u/0/project/{your-projectId}/settings/general
CLIENT_FIREBASE_CONFIG=
// https://console.firebase.google.com/u/0/project/{your-projectId}/settings/serviceaccounts/adminsdk
SERVER_FIREBASE_SERVICE_ACCOUNT=
// firestore collection
COLLECTION=roadmap
// rowy table id
TABLE_ID=roadmap

// OPTIONAL: Use a secret to secure auth session
SESSION_SECRET=s3cr3t

// OPTIONAL: feedbackFin submission webhook url
FEEDBACK_FIN_WEBHOOK_URL=
```
