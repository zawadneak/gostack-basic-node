<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
    <img height= "200" src="http://pluspng.com/img-png/nodejs-logo-png-javascript-node-js-nodejs-icon-download-png-512.png"/>
</h1>

<h3 align="center">
  Basic Node Challenge
</h3>
<p align="center">
  A node challenge made to improve at its basic concepts! :smiley:
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

</p>


:rocket: The Challenge
------------------
This challenge was proposed at a [**Rocketseat**](https://rocketseat.com.br/) GoSack bootcamp! The main objective was improving 
at NodeJS basic concepts.

The challenge GitHub page can be seen [here](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/README.md#desafio-01-conceitos-do-nodejs)
(Brazilian Portuguese)

#### Changes and Implementations!
Compare my changes to the [*bootcamp correction*](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/index.js)

- Added PUT and DELETE methods for projects tasks!
- Added a middleware for checking the task index!
- Instead of creating all the routes in the *index.js* file, I created a separate *routes.js* file for better project organization:
<p align="center">
  <img src="http://i.imgur.com/EbC5tR6.png">
</p>

- Added a better log for the application, including request method,duration and url, 
insted of only the request count:

```javascript

server.use((req,res,next)=>{
  console.time('Request');
  console.log('==============')

  console.count('Request number')
  console.log(`Method: ${req.method} | URL: ${req.url}`)

  next();

  console.timeEnd('Request');
})

```

:wrench: Technologies used:
----------------------
- [**NodeJS**](https://nodejs.org/en/)
- [**ExpressJS**](https://expressjs.com/)
- [**Nodemon**](https://nodemon.io/)

## :scroll: License

This project is under the [MIT license](LICENSE)

:speech_balloon: Reach me
----------

[*In case you want to reach me*](https://www.linkedin.com/in/lcassilha/)



Thank you for taking a look at my project! Made with ♥
