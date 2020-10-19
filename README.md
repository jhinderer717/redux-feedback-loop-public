# redux-feedback-loop


## Description

The redux-feedback-loop is an app to have a user submit feedback to a database. Three pages require the user input a number 1-6 based on criteria listed on the page. Then a comments page lets the user add a comment if they choose. The next page reviews all things input. Upon submission at the Review page, the information is uploaded to a database. Then the Thank You page shows a button where one can go back to the first page and submit a new form of feedback.


## Prerequisites

To run this app, you'll need:
- Node.js
- Postgres


## Install

With this project opened, in the terminal run:
- npm install
- npm run server

Then:
- npm run client

## Usage

The app will load the first page to input feedback. The first 3 input pages require a response. The comments page to follows has optional input. Review the feedback after the comment page, upload the feedback with the Submit button where the user goes to the Thank You page where they have the option to go back to the first page and submit another round of feedback.