How I set up this test framework from scratch:
- Install Visual Studio Code if you do not have it installed already.
- Install latest 'node' if you do not have it installed already. When 'node' is installed 'npm' is also installed by default along with it.
- Create a test folder with a suitable name in your computer
- Open VS Code and Open the above folder in VS Code
- Open a terminal in the VS Code
- In the terminal run npm init playwright@latest
- - - Do you want to use TypeScript or JavaScript? - Select JavaScript
- - - here to put your end-to-end tests? - Leave as default 'tests'
- - - Add a GitHub Actions workflow? (y/N) - type 'y'
- - - Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) - Type 'Y'
- Create a directory - `env`. Inside the `env` directory, create enviroment config files, e.g. `.env.qa`, `.env.staging`, `.env.local` etc
- - - Copy and paste the below to each .env files and amend the values accordingly correspondent to the environment
`URL=https://iftekhar-mishu-2024-05-16.cookieclickertechtest.airelogic.com/
USER_NAME=me
PASSWORD=secret`
- In the terminal, inside the same directory run the below:
`npm install --save dotenv`
- In the playwright.config.js file add these lines
`import dotenv from 'dotenv';`

`dotenv.config({
  path: `env/.env.${process.env.ENV}`,
})`

Inside the use, add:
 baseURL: process.env.DEMO === '1' ? 'https://iftekhar-mishu-2024-05-16.cookieclickertechtest.airelogic.com/' : 'https://orteil.dashnet.org/cookieclicker/',



- Inside that directory, you can run several commands:
  `npx playwright test`
    Runs the end-to-end tests.

  `npx playwright test --ui`
    Starts the interactive UI mode.

  `npx playwright test --project=chromium`
    Runs the tests only on Desktop Chrome.

  `npx playwright test example.spec.js`
    Runs the tests in a specific file.

  `npx playwright test --debug`
    Runs the tests in debug mode.

  `npx playwright codegen`
    Auto generate tests with Codegen.

However, in this repo, commands are as below
- To Run locally:
`ENV=env_name USER_NAME=me PASSWORD=secret  npx playwright test`
    Environment is a required command line parameter.
    Passing Username and Password variables in command line parameters to override the values in the .env file related to the environment.
or,
(in case USER_NAME and PASSWORD are rad corectly from .env file)
`ENV=env_name npx playwright test`
    Environment is a required command line parameter.
    Username and Password are consumed from the relevant .env file correspondent to the environment.



And check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

- package.json: node project management file
- playwright.config.js: Configuration file
- tests folder: Test folder where tests reside
- playwright.ymal: Used during CI/CD pipeline
