# Superhero Maintenance Angular

This project is a Angular application that allows users to manage a database of superheroes. It is built using Angular and follows the principles of hexagonal architecture to create a clean and maintainable codebase.

The application provides the following features:

- CRUD (Create, Read, Update, Delete) operations for superheroes
- List, search, and filter superheroes
- View detailed information about each superhero, including their powers

### Hexagonal Architecture
Hexagonal architecture is a software design pattern that focuses on the business logic and separates it from the infrastructure and presentation layers. This allows for a more modular and testable codebase, as well as a better separation of concerns.


### Testing
This project includes a suite of unit tests to ensure the quality and reliability of the application. The tests are written using the Jasmine framework and can be run using the Angular CLI.

To run the tests, use the following commands:

##### Run unit tests


1. run `npm run test`

### Mock Backend

This project contains a mock backend using the **json-server** library. A mock backend is a simulated API that allows you to test your frontend code without having to set up a real backend.

You can see the example information in **src\app\modules\mock\heroes.json**.

The mock backend is automatically started when you run the `npm run start` or `npm run test`.

However, if you want to start the mock backend server separately, you can use the following command: `npm run mock-server`


## Running the Application
To initialize the project, follow these steps:

1. Clone the repository
2. Install the dependencies by running `npm install`
3. Start the development server by running `npm run start`
4. Open a web browser and navigate to http://localhost:4200

##### Prerequisites
Before you can initialize the project, you will need to have the following installed on your machine:

1. Node.js
2. Angular CLI
To install the Angular CLI, run `npm install -g @angular/cli`.

### Running the Application with Docker

This application can be run using Docker and Docker Compose. This allows you to run the Angular application in a container and the mock backend in another container.

To initialize the project with Docker, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Run the application with Docker Compose `docker-compose up`
4. Open a web browser and navigate to http://localhost:4200


##### Prerequisites
1. Docker



## Contributing
I am excited to share this project with you and welcome any contributions that can help improve the codebase. Even though I am the only user of this repository, I believe that collaboration is key to creating better software.

If you have any ideas or suggestions for improving this project, please feel free to contribute. You can do this by following these steps:



1. Fork the repository
2. Create a new branch for your changes
3. Make your changes and push them to your fork
4. Submit a pull request for review

I will review your pull request as soon as possible and provide feedback if necessary. Thank you for considering contributing to this project!
