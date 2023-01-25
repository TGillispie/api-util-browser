*This is a testing framework primarily (for APIs) with several tests provided.*
*There is also an example application implemention of a basic service call.*
*Run any number of the provided tests or write new tests and run them indvidually.*

This code was written with **NodeJS** JavaScript.

See [Quick Setup](#quick-setup) to get started right away.

Add new APIs to the src/service folder.

(*Compare this project against the Browser version to see how similar JavaScript is in NodeJS programs vs. Browser programs. [api-util-browser](https://github.com/TGillispie/api-util-browser) *)

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
- [Run](#run)
- [Program](#program)
   - [Program Files](#program-files)
- [Test](#test)
- [Legal](#legal)


## Setup

### Quick Setup
```bash
# Clone the project first then run...
cd js-api-util
pnpm install

# Get/save a working copy of the .env config into the root path.
touch .env

# Run the dev server.  Navigate to localhost:5147 and follow the examples.
pnpm dev

# - OR - run the tests.
pnpm test
```

### Get the Code
Clone this project from github.
```

```

### Install Dependencies
Run this ```pnpm install``` to install all dependencies listed in package.json.

### Setup Config
Copy and update any keys or credentials necessary for the project.
```bash
# Get a copy of the .env config.
cp somewhere/.env .env
```

## Run
# Run the vite dev server and try out the examples manually.
```
pnpm dev
```

# Run test located in the test foler.  Folders ending in testx will be skipped.
```
pnpm test
```

# Run test overage.
```
pnpm coverage
```

## Program

### Program Files
Most files are stored in the src folder.  The application entry point is index.html and is located in the root project folder.

File | Description
:---: | ---
 *-* | **Application**
*index.html* | Main entry point. The id=app placeholder is located here. The main.js file populates this placeholder.
 *-* | **Components**
*src/components/*.mjs* | Basic components that provide the UI for some usage examples.
 *-* | **State Management and Services**
*src/service/oars.mjs* | An implementation of the OARS API.
*src/state/global.mjs* | A global object for storing program data, and config values.
*.env* | Appication config for all secret files.


### Test
Tests are located in the test folder.  vite.config.js holds configuraiton parameters for the test runner (vitest).

The config was modified to search for folders ending in -test.  To skip a test folder modify the ending.

Example: ``` test/api-testx   # Skip tests in this folder. ```

## Legal

This repository is a scientific product and is not official communication of the National Oceanic and Atmospheric Administration, or the United States Department of Commerce. All NOAA GitHub project code is provided on an ‘as is’ basis and the user assumes responsibility for its use. Any claims against the Department of Commerce or Department of Commerce bureaus stemming from the use of this GitHub project will be governed by all applicable Federal law. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by the Department of Commerce. The Department of Commerce seal and logo, or the seal and logo of a DOC bureau, shall not be used in any manner to imply endorsement of any commercial product or activity by DOC or the United States Government.
