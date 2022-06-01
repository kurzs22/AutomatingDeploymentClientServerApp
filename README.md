# Automating the deployment of a client-server application - Node.js, Sequelize, Express, React, Heroku

## Challenge

Differentiate between pre-production and production environments

Create another Heroku app (give it the same name, replacing staging with production). Add the Heroku Postgres add-on and the DATABASE_SSL environment variable as for the pre-production environment.

On the Deploy tab, connect the app to the same repository on GitHub, but don't click Enable Automatic Deploys. Instead, click on Deploy Branch in the Manual deploy section: once the build is finished, you should see the same result as on staging.

Write a seed script, which you will call insert-mock-items, which inserts new items into the database – except in the production environment.

Note: it is common to dissociate the behavior according to the environments – for example, one wishes to insert fictitious data in pre-production to carry out tests, but this data must not appear in production.

##Validation criteria

- Once the changes are deployed in pre-production, the new items are posted on https://kurzs22-staging.herokuapp.com
- After changes are deployed to production, new items are not displayed on https://kurzs22.herokuapp.com


