<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/307298/210359227-67ce6157-3909-4ea3-a402-336c392a4c78.png" alt="Rowy Roadmap App Logo" width="300">
  <br/>

</p>

<h3 align="center"> Public roadmap app for your product </h3>
<p align="center">
Easily share your product roadmap with your users, gather feedback, and keep your community in the loop. 
</p>

<p align="center">
  Powered by <br/>
  <a href="https://www.rowy.io?utm_source=github&utm_campaign=readme&utm_medium=roadmap">
    <img src="https://user-images.githubusercontent.com/307298/210066491-0d9cae79-bd88-4664-88d2-48e3bbe723ea.png" alt="Rowy Logo" width="80" >
  </a>
</p>
<div align="center">
<h3>One click deploy to Vercel 👇</h3>
</div>
<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frowyio%2Froadmap&env=CLIENT_FIREBASE_WEB_API_KEY,SERVER_FIREBASE_SERVICE_ACCOUNT,SESSION_SECRET,COLLECTION,TABLE_ID&project-name=rowy-roadmap&repository-name=rowy-roadmap)

</div>

<h4 align="center">

<img width="800" src="https://user-images.githubusercontent.com/307298/211045738-d959b09a-9965-4c8c-8b2a-bd1679a91826.png" alt="Rowy Roadmap App">

LIVE DEMO: <a href="https://roadmap.rowy.io/">roadmap.rowy.io</a> </h4>
<div align="center">

[![Discord](https://img.shields.io/discord/853498675484819476?color=%234200FF&label=Chat&logo=discord&logoColor=%23FFFFFF&style=for-the-badge)](https://discord.gg/fjBugmvzZP)

</div>

<h2> Features </h2>
✅ Get feedback on your roadmap from public user groups or communities<br/>
✅ Upvote and downvote<br/>
✅ Comments<br/>
✅ Customizable categories: In progress, Next, Needs feedback, Release .. <br/>
✅ Open-source, flexible and fully free<br/>
✅ Optionally, comes with an in-app feedback widget for open ended feeature requests or feeback<br/>
✅ CMS UI with ability to add any automation or workflows with Rowy<br/>

<h2> Setup Guide</h2>

Complete setup guide video

<h3>Step 1: Setup backend template</h3>
The backend template for the roadmap app is available on Rowy - a lowcode platform for Firebase. This template will get you setup with a database on Firestore and cloud functions on Firebase. <i>
Don't worry if you have not familiar with Firebase, Rowy will guide you through the entire process. 
</i> 
<br/>
<br/>

1. Create an account on <a href="https://www.rowy.io?utm_source=github&utm_campaign=readme&utm_medium=roadmap" target="_blank">Rowy</a> and create a workspace for the Roadmap app
2. Create a new project by connecting it to Firebase - step by step video
3. Create a new table from "Roadmap app" template
4. Add the initial set of data to be displayed on the roadmap app on table

<h3>Step 2: Setup frontend template </h3>
You can deploy the roadmap app frontend, built with Remix, to Vercel using the one click deploy button below. 
<br/><br/>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frowyio%2Froadmap&env=CLIENT_FIREBASE_WEB_API_KEY,SERVER_FIREBASE_SERVICE_ACCOUNT,SESSION_SECRET,COLLECTION,TABLE_ID&project-name=rowy-roadmap&repository-name=rowy-roadmap)

Add the following environment variables by following the instructions below.

```
CLIENT_FIREBASE_WEB_API_KEY=
SERVER_FIREBASE_SERVICE_ACCOUNT=
COLLECTION=roadmap
TABLE_ID=roadmap

// OPTIONAL: Use a secret to secure auth session
SESSION_SECRET=<s3cr3t>

// OPTIONAL: To add a feedback widget 
FEEDBACK_FIN_WEBHOOK_URL=
```

| `env` variable | Description |
| --- | --- |
| CLIENT_FIREBASE_CONFIG | Add your Firebase project config json - you can get it from your Firebase project [here](https://console.firebase.google.com/u/0/project/_/settings/general) |
| SERVER_FIREBASE_SERVICE_ACCOUNT | Generate an Firebase admin sdk service account and add that to your config by following this [link](https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk) to your Firebase project |
| COLLECTION | Your Firestore collection that stores the roadmap data. Default to `roadmap` |
| TABLE_ID | Rowy Table ID. Default to `roadmap` |
| SESSION_SECRET | `Optional` setup a session secret |
| FEEDBACK_FIN_WEBHOOK_URL | `Optional` If you want to add a feedback widget to your roadmap app, add the webhook URL setup using [FeedbackFin](https://github.com/rowyio/feedbackfin) |

<h2> Contribution and development guide </h2>
If you would like to contribute to this project, then follow this development setup guide.

To run your app locally, make sure your project's local dependencies are installed using 

``` 
npm install
```

Afterwards, start the app's development server like so:

```
npm run dev
```

Open up http://localhost:3000 and you should be ready to go!
