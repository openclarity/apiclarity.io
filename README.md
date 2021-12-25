![api-clarity logo](/api-clarity/public/assets/shared/logos/logo-light-horizantal-svg.svg)
##### **Open source for API traffic visibility in K8s cluster**

## Overview
This is the repository for apiclarity.io, the website containing information on APIClarity.

>APIClarity, an open source cloud native visibility tool for APIs, utilizes a Service Mesh framework to capture and analyze API traffic, and identify potential risks.
>
>Use APIClarity to compare your OpenAPI specification to its state at runtime. For apps that don’t have an OpenAPI specification, leverage APIClarity to reconstruct a specification in a live environment.
>
>Cloud native applications use and expose APIs, which have been the source of many highly publicized cyber-attacks and breaches. Leverage APIClarity to improve your API visibility and your applications security posture.

## Getting Started

```bash
# Install node_modules
yarn
# Run the project in development mode
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the project in development mode.

It is helpful to build the project before committing code, in case there are any issues uncaught by development mode. To do this:

```bash
#Build and export the project
yarn build
#Launch the build locally
yarn start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to access the project in production mode.

*Note: Next/Image is not currently working when using next export, so we are using standard HTML img tags for now. In the future, we will either stop using export or the issue will be fixed and we will update accordingly.*


### Technologies Used
* React/NextJS
* Sass
* TypeScript

