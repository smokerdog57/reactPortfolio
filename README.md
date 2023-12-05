# 20 React: React Portfolio

### GitHub repository:  	https://github.com/smokerdog57/reactPortfolio
### Deployed app:		https://reactportfolio-tom-fusco.netlify.app/

## Badges    
![github](https://img.shields.io/badge/github-Profile-lightgrey.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow.svg)
![node.js](https://img.shields.io/badge/node.js-12.0-green.svg)
![npm](https://img.shields.io/badge/npm-6.14.4-blue.svg)
![Express](https://img.shields.io/badge/Express-red.svg)
![chrome castify](https://img.shields.io/badge/chrome%20castify-orange.svg)
![dotenv](https://img.shields.io/badge/dotenv-blue.svg)
[![Vite](https://img.shields.io/badge/Vite-^5.0.0-blue?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-^18.2.0-blue?logo=react)](https://reactjs.org/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d0350728-01a1-4687-afb0-9655e8f0ca35/deploy-status)](https://app.netlify.com/sites/reactportfolio-tom-fusco/deploys)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Mock-up](#mock-up)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
 This app features my portfolio built using VITE and REACT. It enables the user to view four different portions of the portfolio using the following nav links: 
* About me
* Portfolio
* Contact
* Resume.

It is deployed using Netlify.

## Installation

### Installation: Scaffold VITE Application
```md
1. In the command line, navigate to the desired parent folder and run `npm create vite@latest`.
    * 🔑 *Note*: This command will automatically create a sub-folder which will house your React application; you do not need to perform a `mkdir` command to create one manually.
2. Enter the desired name of your new project folder.
3. From the first list of options, select your framework; for our activities in class, we'll be using `React`.
4. From the second list of options, select your variant; for our activities in class, we'll be using `JavaScript`.
5. `cd` into your newly created project folder and run `npm install`.
    * In later activities we'll add additional NPM packages to our `vite` apps such as 'bootstrap', 'dotenv', and 'axios'.
6. Run `npm dev`/`npm run dev` and navigate to the prompted URL to see your app.
7. Navigate to your `package.json` and modify the `scripts` object so that it looks like this example:

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```
8. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```
### Installation:  post VITE scaffolding

9. add to VITE scolding to build out your folder structure.
10. develop and test your app locally.
11. Run the build. At the CLI: npm run build.
11. Push to github repository.
11. Follow instructions to deploy from github on [Docs on Netlify](https://vitejs.dev/guide/static-deploy.html#netlify).

## Usage

### Use Locally
1. open MS Visual Studio and terminal
2. enter cli:  cd reactPortfolio
3. enter cli:  npm start

### Use Deployed app
[reactPortfolio](https://reactportfolio-tom-fusco.netlify.app/)

## Requirements

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Mock-Up

The following animation shows the web application's appearance and functionality:

![User clicks through About Me, Portfolio, Resume, and Contact sections on the webpage and enters information on Contact page.](./public/images/20-react-homework-demo-01.gif)

## License

github, jses6, express.js
https://opensource.org/licenses/MIT

npm
https://opensource.org/licenses/Artistic-2.0


- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contributing

1. Sandy Smith (tutor):  Sandy helped me understand the acceptance criteria.

## Tests                 
```md
1. TEST001: VERIFY APP.JS. At the CLI: npm start.  Verify that the App component renders without errors.
2. TEST002: HELLO WORLD: Verify that "HELLO WORLD" is displayed on the page. 
3. TEST003: HEADER COMPONENT (Header.jsx): Verify that the Header component renders HELLO WORLD. 
4. TEST004: HEADER COMPONENT NAV Links: Verify that navigation links (About Me, Portfolio, Contact, Resume) are rendered.
5. TEST005: HEADER COMPONENT STYLING. Verify that header component occupies the top 25% of the page and the h1 and links are displayed in white text against an attractive background. The links should be on same line as the H1 tag and the links should be displayed horizontally on the same line with space between them.
6. TEST006: MAIN & FOOTER COMPONENT CREATION. Verify that page DOM has a header, main and footer components. The header remains unchanged and is at the top of the page. The main is directly underneath the header and the footer is directly underneath the main.
7. TEST007: HOME PAGE WITH ABOUTME RENDERED:  home page renders without errors.
8. TEST008: PORTFOLIO Page-Specific Component: Verify that PORTFOLIO component renders without errors.
	8.1 Test with dummy content.  Run the application and navigate to page to ensure the dummy content is displayed. 
	8.2 Test with actual content.  Run the application and navigate to page to ensure the actual content is displayed.
9. TEST009: CONTACT Page-Specific Component: Verify that page component renders without errors. **Note**: Because this application doesn’t include a back end or connect to an API, the contact form doesn't need to save this information right now. You'll add back-end functionality in the next few weeks. In the meantime, consider including your email address and phone number on the Contact page.
10. TEST010: RESUME Page-Specific Component: Verify that page component renders without errors.
11. TEST011: Deploy to Netlify and test deployed app.
```

## Questions
  
### Github username
smokerdog57

### Github url
https://github.com/smokerdog57/reactPortfolio
  
### Contact me
email: smokerdog57@gmail.com
phone: 941-221-1132