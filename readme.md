# Playwright Tutorial - Typescript

## What is Playwright?
- The playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web testing.
- Playwright by Microsoft did start as a fork of Puppeteer Puppeteer is a node library to automate the chromium browsers with the JavaScript API

## How to use?
- Clone the repository
- open the project
- From the terminal install all the dependencies using 'npm i'

## Required software
- Node js -> v.14 or above
- VS Code

## Docker

### Prerequisites
- Install Docker Desktop
- Start Docker before running any Docker command
- Open the project root in terminal

### Build Docker Image

#### Build the image
```bash
npm run docker:build
```

### Run Tests In Docker

#### Run the default suite
```bash
npm run docker:test
```

#### Run only login test
```bash
npm run docker:test:login
```

#### Run LambdaTest suite
Set the LambdaTest credentials first:

```bash
export LT_USERNAME="your_username"
export LT_ACCESS_KEY="your_access_key"
```

Then run:

```bash
npm run docker:test:lt
```

### Run Tests In Docker With Artifacts

#### Run the default suite and keep artifacts on local machine
```bash
npm run docker:test:artifacts
```

#### Run only login test and keep artifacts on local machine
This command builds the image and then runs the login test:

```bash
npm run docker:test:login:artifacts
```

#### Run LambdaTest suite and keep artifacts on local machine
Set the LambdaTest credentials first:

```bash
export LT_USERNAME="your_username"
export LT_ACCESS_KEY="your_access_key"
```

Then run:

```bash
npm run docker:test:lt:artifacts
```

### Docker Artifacts

#### Artifact folders copied back to local machine
- `playwright-report`
- `test-results`
- `jsonReports`

### Notes

#### Run Docker Desktop from CLI on macOS
```bash
open -a Docker
```

#### Verify Docker is running
```bash
docker version
```

