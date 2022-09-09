# JOURNAL EXPRESS

***
## Author 

**Pascal Odudigbo**

***
​
## PROJECT DESCRIPTION
- Journal Express: is simply an online personal diary for recording daily entries.
​
## Table of content
- [Technologies]
- [Description]
- [Features]
- [Setup-process]
- [Project-usage]
- [Copyright]
- [Licence]
​
## Technologies
​
languages used are: 
- HTML : HTML5 -which is used to create the structure of the page
- CSS : CSS4 -used to style the page
- Javascript : used for code logic
​
### Features
* As a user you are able to:
    - Create an account
    - Recover account if you forgot your password
    - Login and view all previous entries
    - Add a new entry
    - Update an existing entry
    - Delete an existiing entry
    - Search for a specific journal entry
​
### Description
The site uses a database to store users information and journal entries. 
User's only have access to their specific entries and can perform CRUD (Create, Read, Update, Delete) operations on said entries.
The frontend and backend of this project are located in two different repositories for deployment purposes.
​
### Challenges
My major challenge was the design aspect as i required assistance from a comrade in order to finalize the design process (Elvis Kimani).

Another challenge was deploying the applications backend as i also required assistance from a comrade who is well versed in that (Anthony Kimani). 
*** 
## How to set up and run the project
​
### Requirements
* npm
* Visual Studio Code
​
   
​
#### Set up
clone the front-end repo using the command
- $git clone git@github.com:PascalOdudigbo/online-journal-app-frontend-.git

clone the back-end repo using the command
- $git clone git@github.com:PascalOdudigbo/online-journal-app-backend.git

change directory install necessary gems or undles using these instructions
- $cd ./online-journal-app-frontend
- code .
- $npm install
- $npm start 

- $cd ./online-journal-app-backend
- code .
- $bundle install
- $bundle exec rake servere

- go to the frontend repo and in the login, creataccount, forgot password, add entry and update entry components change the url variable to be initialized with your local server link
​
​
#### live link
 - Alternatively, you could use the application through the live links: 
 - frontend: https://journal-app-client.herokuapp.com/home/all-journals
 - backend: https://journal-app-server.herokuapp.com/
***
## How to use the project
- ​As a new user, click on the live link and create an account.
- login to the app with the credentials used for creating your account
- click on the Add entry link in the Navigation bar and add a new user
***

### Contributing to the project
Fork the repo. Create a new branch in your terminal(git checkout -b improve-feature). Install the prerequisites. Make appropriate changes in file(s). Add the changes and commit them (git commit -am "improvements"). Push to the branch and create a pull request.
​
***