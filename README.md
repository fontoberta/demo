# Fontoberta Demo

## Introduction

Fontoberta Demo is part of the sample code for [Fontoberta's](http://www.fontoberta.com) software development services. It is an Angular 6 application that feeds from [Boon](https://github.com/fontoberta/boon) and [Taktaan](https://github.com/fontoberta/boon) APIs.  


## Dependencies

This demo requires running instances of [Boon](https://github.com/fontoberta/boon) and [Taktaan](https://github.com/fontoberta/boon) APIs. These APIs can also be hosted outside of a docker container, with minor configuration changes. For demo purposes, using the docker installation is recommended.

Therefore, a Docker installation would be required on the host machine.

Make sure the following ports are available:

Boon: 8000
Taktaan: 5000
MySQL: 3306
Demo: 80

## Docker Installation

To install the application, Boon and Taktaan in docker containers (including MySQL database with initial data for Boon), execute the script located in the root directory of the project as follows:

`$ source installfullstack.sh`

This will download code for both APIs from github, and build/deploy in docker containers.

This demo is intended for execution on a local system, but can be deployed to named servers with  minimal configuration changes.

## Local Installation

All components required to run the demo can be deployed using Docker, or directly in your local system,but for demo purposes, using the docker installation is recommended.

For analysis and debugging purposes, you can stop the demo container, leaving Boon and Taktaan running on their containers, and execute Demo localy as an Angular CLI application, as follows:

`$ npm install`
`$ ng serve --open`

## Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Usage

The Demo has an intuitive interface that is self explanatory. It contains two options: Docker and Image Viewer.

To authenticate, please use one of the Boon users included in the README.md found in [Boon](https://github.com/fontoberta/boon).

The Docker screen will show a list of Docker containers currently deployed to your installation, and will allow to start or stop each container.

The Image viewer presents all the images classified using Boons data structure. In order to edit or add data and images to Boon, the Boon REST API interface should be used.