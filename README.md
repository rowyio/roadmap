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
  <a href="https://www.rowyio?utm_source=github&utm_campaign=readme&utm_medium=roadmap">
    <img src="https://user-images.githubusercontent.com/307298/210066491-0d9cae79-bd88-4664-88d2-48e3bbe723ea.png" alt="Rowy Logo" width="80" >
  </a>
</p>
<h4 align="center">
LIVE DEMO: <a href="https://roadmap.rowy.io/">roadmap.rowy.io</a> </h4>
<div align="center">

[![Discord](https://img.shields.io/discord/853498675484819476?color=%234200FF&label=Chat&logo=discord&logoColor=%23FFFFFF&style=for-the-badge)](https://discord.gg/fjBugmvzZP)

<img width="800" src="https://user-images.githubusercontent.com/307298/211045738-d959b09a-9965-4c8c-8b2a-bd1679a91826.png" alt="Rowy Roadmap App">



</div>

<h2> Features </h2>
✅ Get feedback on your roadmap from public user groups or communities<br/>
✅ Upvote and downvote<br/>
✅ Comments<br/>
✅ Customizable categories: In progress, Next, Needs feedback, Release .. <br/>
✅ Open-source, flexible and fully free<br/>
✅ Optionally, comes with an in-app feedback widget for open ended feeature requests or feeback<br/>
✅ CMS UI with ability to add any automation or workflows with Rowy<br/>

<h2> How to setup the app</h2>

<h3>Step 1</h3>
Setup an account on <a href="https://www.rowyio?utm_source=github&utm_campaign=readme&utm_medium=roadmap" target="_blank">Rowy</a>. Rowy is a low-code platform for managing your database with a familiar spreadsheet-like UI like shown below. Rowy comes with a pre-built table template for this roadmap app to manage the items on your roadmap table.
<br/><br/>
👉 Explore a <a href="https://demo.rowy.io/table/roadmap" target="_blank">demo playground instance of Rowy here </a>
<img width="1538" alt="Screen Shot 2023-01-07 at 2 33 10 am" src="https://user-images.githubusercontent.com/307298/211044341-65cd67b2-417b-4467-a423-c1123223254c.png">

<h3>Step 2</h3>
After you finish setting up your Rowy account and the first workspace. Create a project and connect it to Firebase. Don't worry if you have not used Firebase before, Rowy guides you through the whole process - this should only take a few minutes. Inside your project, create a new table from the "Roadmap app" template. This comes with all the data columns you need for use in the roadmap app. <br/><br/>
<i>Note: Your data will be stored on Firebase's Firestore. This gives a secure way to store your data on your own cloud project on GCP i.e. you have full control and ownership of your data.</i><br/>
<h3>Step 3</h3>
Finally, deploy the roadmap app on Vercel using one the options below and connect to your backend by providing the relevant keys as env variables.
<h4>Option A - Recommended</h4>
You can deploy this roadmap app repo to your Vercel account directly using the following one click deploy button<br/><br/>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frowyio%2Froadmap&env=CLIENT_FIREBASE_CONFIG,SERVER_FIREBASE_SERVICE_ACCOUNT,SESSION_SECRET,COLLECTION,TABLE_ID&project-name=rowy-roadmap&repository-name=rowy-roadmap)


<h4>Option B - Manual</h4>
Alternatively, if you want to manually deploy, then ensure you add the following `environment` variables.

```
CLIENT_FIREBASE_CONFIG=
SERVER_FIREBASE_SERVICE_ACCOUNT=
COLLECTION=roadmap
TABLE_ID=roadmap

// OPTIONAL: Use a secret to secure auth session
SESSION_SECRET=<s3cr3t>

// OPTIONAL: Open ended feedback widget using [FeedbackFin](https://github.com/rowyio/feedbackfin) - add submission webhook url
FEEDBACK_FIN_WEBHOOK_URL=
```

<h5>CLIENT_FIREBASE_CONFIG</h5>
Your Firebase project config. Follow this link, by replacing the {your-projectId} with the Firebase project id: https://console.firebase.google.com/u/0/project/{your-projectId}/settings/general<br/>
<h5>SERVER_FIREBASE_SERVICE_ACCOUNT</h5>
Generate an Firebase admin sdk service account and add that to your config. Follow this link, by replacing the {your-projectId} with the Firebase project id: https://console.firebase.google.com/u/0/project/{your-projectId}/settings/serviceaccounts/adminsdk<br/>
<h5>COLLECTION</h5>
Your Firestore collection that stores the roadmap data<br/>
<h5>TABLE_ID</h5>
Rowy Table ID<br/>

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
