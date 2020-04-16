# Random sample for Cypress E2E testing.

## Prerequisites:
* Should have Node version 8 and above

## Setup

0) Have local server running (turn off Google OAuth)
1) git clone
2) npm install
3) npm run test 

## Notes

* There is a cypress/included Docker image in DockerHub that might be the better way to run e2e tests (if we create test files in ltflask)

    https://hub.docker.com/r/cypress/included


## TODOS

* Pass in domain as env var, so you could test in other environments? Not sure yet about the OAuth flow though.