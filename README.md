# sp-api

## Description

API project to play with programs and developers.

## Motivation

The motivation is to show my skills with Express and React.

## Installation steps

- Clone the repository.
- Run 'npm install' to get the required dependencies.

## How to run the code/tests

1. Execute 'node ./src/bin/www' to run the api project.
2. Click on the 'test' script in the left to run the tests. 

## Other explanations

- **Was it your first time writing a unit test, using a particular framework? How did you approach testing?**

  Yes, it was my first time writing unit tests with Mocha and Chai. I approached it quite naturally, just like a user would. For the test to get a program by ID I verify that the correct program is obtained and for the test to get all programs, I verify that the status is 200, which means that the page has been loaded correctly.

- **What would you do to improve the performance/scalability/resilience?**

  I would use a database to make the application more real and consistent instead of getting the data from json files.

- **What would you have done differently if you had had more time? Why?**

  In the backend I would have developed more endpoints such as creating new programs and developers and let the user to modify and delete them.

  In the frontend I would have improved the styles.

I have simulated the database by getting the data directly from the json files for the sake of time and simplicity.

To make it more real, I could have configured 2 databases and 2 more backend projects, one for the programs and another for the developers, but the test would have taken too long.

I have made a frontend project also to facilitate the visualization of the data.

## ROUTES:

### Endpoints

| Method | Path            | Description                                   | End View        |
| :----: | --------------- | --------------------------------------------- | --------------- |
|  GET   | `/`             | Programs                                      | `/`             |
|  GET   | `/programs/:id` | Get the information of a determinated program | `/programs/:id` |

## Links

### Git

https://github.com/duducarmona/sf-api
