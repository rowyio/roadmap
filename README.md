<div align="center"><h3> We are LIVE on Product Hunt, please support us 🙏 </h3>
<a href="https://www.producthunt.com/posts/roadmap-voting-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-roadmap&#0045;voting&#0045;app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=376657&theme=light" alt="Roadmap&#0032;Voting&#0032;App - Open&#0045;source&#0032;tool&#0032;to&#0032;share&#0032;roadmap&#0032;&#0038;&#0032;get&#0032;customer&#0032;feedback | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a></div> <br/>

<a href="https://www.roadmap.vote?utm_source=github">
  <img alt="Roadmap Voting App" src="https://user-images.githubusercontent.com/307298/213961520-28036f4c-17bb-4582-87d8-c15fa90e026f.png"> <br/><br/>
  <h1 align="center">Product Roadmap Voting App</h1>
</a> 

<p align="center">
Get users' feedback and votes for your product roadmap
</p>

<div align="center">

[![Discord](https://img.shields.io/discord/853498675484819476?color=%234200FF&label=Chat&logo=discord&logoColor=%23FFFFFF&style=for-the-badge)](https://discord.gg/fjBugmvzZP)
  
</div>

<h4 align="center">
  <a href="#demo"><strong>Live Demo</strong></a> .
  <a href="#step-2-setup-frontend-template"><strong>One-click Deploy</strong></a> ·
  <a href="#step-1-setup-backend-template"><strong>Powered by Rowy</strong></a> 
</h4>
<br/>

## Overview
Open-source product roadmap app that can be shared publicly with your users to collect valuable feedback. Users can upvote/downvote on features, add comments, request for new features. Keep your users in the loop with workflows notifying them when a feature is ready. The app’s frontend is built with Remix and the backend is built with [Rowy](https://www.rowy.io?utm_source=github&utm_campaign=readme&utm_medium=roadmap) (a lowcode platform for Firebase).

## Demo

Explore a [live demo](https://roadmap.rowy.io/) of the roadmap app

## Features
- [x] Get feedback on your roadmap from public user groups or communities
- [x] Upvote and downvote
- [x] Comments
- [x] Customizable categories: In progress, Next, Needs feedback, Release .. 
- [x] Open-source, flexible and fully free
- [x] Optionally, comes with an in-app feedback widget for open ended feeature requests or feeback
- [x] CMS UI with ability to add any automation or workflows with Rowy

## Setup Guide
Full setup instructions video available [here](https://roadmap.vote/setupvideo)

### Step 1: Setup backend template
The backend for the roadmap app is setup on Firebase and managed via Rowy which is a lowcode platform for Firebase. Rowy gives you a Table UI to manage your the data for your roadmap app along with getting all the backend cloud functions for managing the roadmap app setup in one click.   

_Don't worry if you are not familiar with Firebase, Rowy will guide you through the entire process._  

1. Create an account on [Rowy](https://www.rowy.io?utm_source=github&utm_campaign=readme&utm_medium=roadmap) and create a workspace for the Roadmap app
2. Create a new project by connecting it to Firebase - step by step video
3. Create a new table from "Roadmap app" template
4. Now you can manage your app’s data on Rowy’s CMS for Firestore. Add the initial set of data to be displayed on the roadmap app i.e. your product’s features list, their description, target release date, category etc.

###  Step 2: Setup frontend template
Deploy the roadmap app’s frontend to Vercel using the deploy button. Add the following environment variables. Instructions on how to configure them are available on the GitHub repo.

#### One click deploy to Vercel 👇

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frowyio%2Froadmap&env=CLIENT_FIREBASE_WEB_API_KEY,SERVER_FIREBASE_SERVICE_ACCOUNT,SESSION_SECRET,COLLECTION,TABLE_ID&project-name=rowy-roadmap&repository-name=rowy-roadmap)

#### Add the following environment variables to your app on Vercel

- `CLIENT_FIREBASE_WEB_API_KEY` – Add your Firebase project's web API key. Get it from your Firebase project [here](https://console.firebase.google.com/u/0/project/_/settings/general)
- `SERVER_FIREBASE_SERVICE_ACCOUNT` – Generate a Firebase admin sdk service account JSON and add that to your config by following this [link](https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk) to your Firebase project
- `COLLECTION` – Name of the Firestore collection that stores the roadmap data. Default to `roadmap`
- `TABLE_ID` – Name of the Rowy Table ID. Default to `roadmap`
- `SESSION_SECRET` – `Optional` setup a session secret
- `FEEDBACK_FIN_WEBHOOK_URL` – `Optional` If you want to add a feedback widget to your roadmap app, add the webhook URL setup using [FeedbackFin](https://github.com/rowyio/feedbackfin)

###  Step 3: That's it 🎉

Vercel gives you a hosted app domain or [create customized URL](https://vercel.com/docs/concepts/projects/domains/add-a-domain). Make sure to add this domain URL to list of [authorized domains](https://console.firebase.google.com/u/0/project/_/authentication/settings) in your Firebase project. Now you are all set to share this URL with your users and start gathering votes/feedback on your product roadmap.

![Rowy Roadmap App](https://user-images.githubusercontent.com/307298/211045738-d959b09a-9965-4c8c-8b2a-bd1679a91826.png)

## Contribution and development guide
If you would like to contribute to this project, then follow this development setup guide.

To run your app locally, make sure your project's local dependencies are installed. 

``` 
npm install
```

Then, start the app's development server.

```
npm run dev
```

Open your roadmap app on http://localhost:3000 
