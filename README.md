# Postman API-First Hacktoberfest for Students: API starter

<EDIT ME!>

> README.md is a special file in your repo that gives an overview of your project - it is the landing page people see when they interact with your project. Write anything here that will help collaborators get started helping you! Feel free to replace this quote block with any explanation you want. Some things you might want to include:
>
> - What the project is
> - How to set up development environment (dependencies, local install instructions, how to run server etc.)
> - Any special contributing instructions
> - Project roadmap

---

## About the Project

This repository simply completes all the required challenges for the
Postman Backend API-first Challenge, using the Postman API node-js & Express starter kit

**Database used:** MongoDB (which is a NoSQL database), a free-tier shared cluster of the same is being used

_Some other interesting node/express modules:_

- dotenv: to enable use of environment variables
- mongoose : client interface to connect to mongodb
- mongodb
- cors : Cross Origin Resource Sharing enabled
- express-validator: helps in validating requests data, helpful also in checking form data
- helmet: to secure from basic redundant network attacks

## Build the Halloween Costume Contest API server!

You have chosen to build an API server 🎉! This server should allow users to create, read, update, delete, and upvote Halloween costume party contestants.

### Requirements

You can use ANY tech stack you want, as long your server matches the schema with 7 endpoints, and passes all the tests.

Endpoints:

```
- GET /
- GET /contestants
- GET /contestants/:id
- PATCH /contestants/:id
- DELETE /contestants/:id
- POST /contestants
- PATCH /contestants/:id/upvote
```

To see what types of responses your API should return, check out the [schema](https://www.postman.com/postman/workspace/postman-hacktoberfest-21/api/b8ee9c39-4eb5-46c0-94e0-d643d9064ba9/version/77aea2ac-8b58-4314-82a6-847b40547c1f?tab=define) or [documentation](https://www.postman.com/postman/workspace/postman-hacktoberfest-21/documentation/15567703-097eb31d-3c5a-4b40-90de-870efc823a94).

Your API will need to pass the series of tests in this collection when run with the [Collection Runner](https://learning.postman.com/docs/running-collections/intro-to-collection-runs/): [Test collection](https://www.postman.com/postman/workspace/postman-hacktoberfest-21/collection/15567703-96f91b20-f497-43aa-a7f9-f1443bdd3a71?ctx=documentation)

### Getting started

#### 1. Register for Postman's Student Hacktoberfest

Fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSdiqnbbSSA5a3ifzoTcebEFo5wvPFtAWt5LKboWu3cEi8JGCg/viewform)

#### 2. Fork this repo

Click the "Fork" button at the top-right of this repository. This will create a copy of the repo in your GitHub account.

_\*Note: if you are working in a team, only one person needs to fork this repo. That person will be the Maintainer. They can [add teammates as collaborators](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) on the repo._

#### 3. Add `hacktoberfest` topic to repo [optional]

If you would like anyone's pull requests in your repo to count toward [DigitalOcean's Hacktoberfest](https://hacktoberfest.digitalocean.com/), you will need to opt-in by adding the topic `hacktoberfest` to your repo.

In the "About" section in the upper-right of the repo, click the Settings icon. Add `hacktoberfest` to the Topics field, then click "Save Changes"

<img src="https://user-images.githubusercontent.com/9841162/134696893-29918c99-e2b3-43f7-97a1-99941051e1a4.png" height="150px" style="display: inline-block" />
<img src="https://user-images.githubusercontent.com/9841162/134697037-d044c651-39e5-446d-b577-c0b417085c18.png" height="150px" style="display: inline-block" />

#### 4. Clone your forked repo

[Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked GitHub repo locally to your computer so you can start writing code.

You will need to have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Giturl) installed on your computer

### Building your API server

You can chose any tech stack you like. If you've never built an API before or want a quick start, you can use Postman's API code genereator feature (in Beta) to download a boiler of the server code based on the API schema.

You can do this in Postman for web to access the Beta feature.

#### How to generate server code in Postman (Beta feature)

<a href="https://www.loom.com/share/0ca1e2fc33634dc383a1220acaba5180" target="_blank">
  <img src="https://user-images.githubusercontent.com/9841162/135689266-aff912f7-dd35-4abe-8dad-e16f62476274.png" height="250px"/>
</a>

In order to generate server boiler code, you will need to copy the API schema and create a copy of the API in your own workspace.

- First, go to the Halloween Costume Contest API and select the version `0.0.1`.

- Next click the Code Generation icon (`</>`) in the far right menu

<img src="https://user-images.githubusercontent.com/9841162/134787853-c70d6aa7-c46b-485e-b5de-f0a0408182bf.png" height="200px"/>

- Select the framework for generating your server boiler code

<img src="https://user-images.githubusercontent.com/9841162/134787901-33780432-fc4c-4d18-8c4b-7b5798eb5df5.png" height="200px"/>

For more details see this page: [How to generate server code in Postman](https://learning.postman.com/docs/designing-and-developing-your-api/generating-server-code/)

This will give you a place to start! You will still need to figure out how to persist data (for example by connecting a database).

### Testing your API server

In the API-First approach, a collection of test requests been created based off of the Halloween Costume Contest API schema.

You can fork the [test collection](https://www.postman.com/postman/workspace/postman-hacktoberfest-21/collection/15567703-96f91b20-f497-43aa-a7f9-f1443bdd3a71?ctx=documentation) in Postman to your own workspace. Then, update the `baseUrl` collection variable to the address of your API (ex: `http://localhost:3000` for a local server, or `https://my-deployed-api.herokuapp.com` if deployed) and save.

Now when you run the [collection runner](https://learning.postman.com/docs/running-collections/intro-to-collection-runs/) on this collection, you will see which tests fail. The goal is to make all the tests pass by adding code to your project! This is called **Test Driven Development (TDD)**.

#### How to use Test Driven Development (TDD) to Build your API Server

<a href="https://www.loom.com/share/95beb8de2dee474985875892aee707a9" target="_blank">
  <img src="https://user-images.githubusercontent.com/9841162/135689591-20ef8002-0ae7-4b55-87d7-2d9236bf02c1.png" height="250px"/>
</a>

**Important**: the tests should be run in the order given in order to work.

#### Run tests periodically

Use the collection runner to run the test collection against your API server. The goal is to get all of the tests to pass!

### Make those pull requests!

When adding new changes and features to your server, be sure to make new git branches. When you are ready to add these changes into the main project, you can push the changes to the main GitHub repo, and any of the repo Maintainers can approve it and merge it in.

If you are registered for Digital Ocean's Hacktoberfest, if 4 of your pull requests are approved in the month of October you are eligible to be sent a free limited edition T-Shirt.

If you are new to git, watch these videos to learn:

- [Intro to git in 15 minutes](https://www.youtube.com/watch?v=USjZcfj8yxE)
- [Making pull requests in GitHub](https://www.youtube.com/watch?v=rgbCcBNZcdQ)

### Deploy your API (optional)

There are several solutions for deploying your API publicly for free. If you aren't sure which to use, try one of these:

- [Heroku](https://heroku.com/)
- [Glitch](https://vercel.com/) (for JavaScript based projects)

If you are unable to deploy your API, that is OK. You can submit a video of your locally served API passing all the Postman tests in the Collection Runner.

### Submit your API server

Submit [this form](https://docs.google.com/forms/d/e/1FAIpQLSeg8BVdg3fzuhwgBiM6AXR_NOEKI-w_Q8uG5eBVpfyVZmggXw/viewform) once you've deployed a website that passes all of the tests in the test collection.

You will need to provide the baseUrl of your deployed API server (if you were able to deploy it), so we can run the tests.

If you were unable to deploy your API, that is OK. You can submit a video link of running the tests in Postman's collection runner against your locally served project. Ensure that the video shows all of the tests passing.

We will check that your API passes all the tests, then enter you in the prize raffle! All completed projects will be featured in the Postman blog and Postman Student Newsletter.

### Need help?

Get help in the Postman Student Community Discord server! Ask questions in the `#hacktoberfest-frontend` channel, or join us at Office Hours.
