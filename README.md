<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/307298/210359227-67ce6157-3909-4ea3-a402-336c392a4c78.png" alt="Rowy Roadmap App Logo" width="300">
  <br/>

</p>

<h3 align="center"> Public roadmap app for your product </h3>
<p align="center">
Easily share your product roadmap with your users, gather feedback, and keep your community in the loop. 
</p>
<br/>
<p align="center">
  Powered by <br/>
  <a href="https://www.rowyio?utm_source=github&utm_campaign=readme&utm_medium=roadmap">
    <img src="https://user-images.githubusercontent.com/307298/210066491-0d9cae79-bd88-4664-88d2-48e3bbe723ea.png" alt="Rowy Logo" width="80" >
  </a>
</p>

<div align="center">

[![Discord](https://img.shields.io/discord/853498675484819476?color=%234200FF&label=Chat&logo=discord&logoColor=%23FFFFFF&style=for-the-badge)](https://discord.gg/fjBugmvzZP)

![image](https://user-images.githubusercontent.com/307298/210070378-4345e181-8b73-4ccc-ad17-234294f4d3c4.png)

</div>

<h2> Features </h2>
✅ Get feedback on your roadmap from public user groups or communities<br/>
✅ Upvote and downvote<br/>
✅ Comments<br/>
✅ Customizable categories: In progress, Next, Needs feedback, Release .. <br/>
✅ Open-source, flexible and fully free<br/>
✅ Optionally, comes with an in-app feedback widget for open ended feeature requests or feeback<br/>
✅ Add any automation or workflows with Rowy<br/>

<h2> How to setup the app</h2>

<h3>Step 1</h3>
Setup an account on <a href="https://www.rowyio?utm_source=github&utm_campaign=readme&utm_medium=roadmap" target="_blank">Rowy</a> - which is a low-code platform with an Airtable-like UI for storing and managing your roadmap app's data.
<h3>Step 2</h3>
Once you setup your workspace and first free project (Firebase) on Rowy - you will be then able to create a table from the "Roadmap app" template. This comes with all the data columns you need for use in the roadmap app.<br/>
<h3>Step 3</h3>
Finally, deploy the roadmap app.

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
