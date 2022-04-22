API Util: This program is a utility for testing APIs in **Browser** JavaScript.  See the example in index.mjs for pragmatic use, or run the provided test cases.  Tests for the provided APIs are included in the ./test folder.  Use `npm test` to run them.

Add new APIs to the src/service folder.

Write new Tests in the test folder.

(*Compare this project against the NodeJS version to see how similar JavaScript is in NodeJS programs vs. Browser programs. [api-util-nodejs](https://github.com/TGillispie/api-util-nodejs) *)

The following table lists all currently configured API endpoints.
API | Description | Function
:---: | --- | ---
*OARS*
*-* | download file | `service.download`
*-* | upload file | `service.upload`
*-* | list files | `service.list`
*-* | insert db records | `service.insert`

## Quick Reference

- [Setup](#setup)
   - [Quick Setup](#quick-setup)
   - [Get the Code](#get-the-code)
   - [Install Dependencies](#install-dependencies)
   - [Setup Config](#setup-config)
- [Host and Run](#host-and-run)
   - [Live Server](#live-server)
   - [Python 3](#python-3)
   - [! PHP Dev Server](#php-dev-server)
- [Program](#program)
   - [Program Files](#program-files)
- [Test](#test)
   - [Running Tests](#running-tests)
   - [Test Files](#test-files)
- [Legal](#legal)


## Setup

### Quick Setup
[localhost:3006](http://localhost:3006)
```bash
# Clone the project first then...
cd project
npm install

# Add any required keys or credentials to the config.
# edit the src/state/global.mjs

# Host the project then open http://localhost:3006 in a browser.
npm run dev
# npm run dev, runs the following command.
# live-server --no-browser --cors --port=3006
```

### Get the Code
Clone this project from github.

### Install Dependencies
Run this command from the project root folder to install all dependencies listed in package.json.
```bash
npm install
```

### Setup Config
Update any keys or credentials necessary for the project.
```bash
# Add any required keys or credentials to the config.
# edit the src/state/global.mjs
```


## Host and Run

Host the project with a web server so that index.html can be loaded from a browser.  Several web server examples are provided.

Open the project URL in a browser.  *ex. http://localhost:3006*  The project URL is usually displayed in the terminal after hosting.

### Web Server Examples
Use one of the web server options below or provide your own to host the project folder.

#### live-server
```bash
live-server --no-browser --cors --port=3006
```

#### Python 3
```bash
python3 -m http.server -b localhost 3006
```

#### PHP Dev Server
This example is provided for reference only.  Currently PHP does NOT support .mjs file extensions.  As of PHP 7.4.23 the PHP dev server will not work for ES6 modules.  It does not recognize or serve the correct mime/type.
```bash
# php -S localhost:3006
```

## Program

### Program Files
Most files are stored in the src folder.  The application entry point is index.html and is located in the root project folder.

File | Description
:---: | ---
 *-* | **Application**
*index.html* | Main entry point hosted by a web server program.
*index.mjs* | Main module that loads and runs the program.  Modify this code to try different actions within the program.
*src/app.mjs* | The actual program; app.mjs configures and loads libraries and  dependencies and provides an interface for user actions.
 *-* | **State Management and Services**
*service/oars.mjs* | An implementation of the OARS API.
*state/global.mjs* | A global object for storing program data.
 *-* | **Common Library**
*lib/app-local.mjs* | A library of common custom application functions.


## Test

This project uses jasmine-browser-runner to run JavaScript tests in a browser.  Jasmine is a cross platform JavaScript test framework that works with NodeJS (backend), and in browsers (frontend).  

### Running Tests
Tests can be run once or be hosted in a web server.  The test commands are configured in the package.json project config file for reference.
```bash
# Run tests once.
npm test

# Run a test server.
npm run test-serve # afterwards, navigate to the test server.
```

### Test Files
File | Description
--- | ---
*test* | Test folder holding all tests and test configuration.
*test/support* | Test configuration files.


## Legal

This repository is a scientific product and is not official communication of the National Oceanic and Atmospheric Administration, or the United States Department of Commerce. All NOAA GitHub project code is provided on an ‘as is’ basis and the user assumes responsibility for its use. Any claims against the Department of Commerce or Department of Commerce bureaus stemming from the use of this GitHub project will be governed by all applicable Federal law. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by the Department of Commerce. The Department of Commerce seal and logo, or the seal and logo of a DOC bureau, shall not be used in any manner to imply endorsement of any commercial product or activity by DOC or the United States Government.
