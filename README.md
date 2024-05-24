# Tracr.io Application

This is a Node.js application using Express.js for REST API calls and PostgreSQL for database storage. The application is containerized using Docker and Docker Compose.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development](#development)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker**: Install Docker from [Docker's official website](https://www.docker.com/get-started).
- **Docker Compose**: Docker Compose is included in Docker Desktop for Windows and Mac. For Linux, follow the instructions [here](https://docs.docker.com/compose/install/).

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/tracr.io.git
    cd tracr.io
    ```

2. **Set up environment variables**:
    - Create a .env file in the root of the project and add the following environment variables:
        ```dotenv
        DB_HOST=db
        DB_NAME=Tracr-io
        DB_USER=tracrio
        DB_PASSWORD=tracrioPassword
        ```

## Running the Application

1. **Build and start the application**:
    ```bash
    docker-compose up --build
    ```
2. **The application should now be running at http://localhost:3000.**

## API Endpoints

### Users
- Create a new user
    - POST /users
    - Body:
        {
        "name": "John Doe",
        "email": "john@example.com"
        }

- Get all users
    - GET /users

- Get a user by ID
    - GET /users/:id

- Update a user
    - PUT /users/:id
    - Body:
        {
        "name": "Jane Doe"
        }

- Delete a user
    - DELETE /users/:id

## Development

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Run the application locally**:
    ```bash
    npm run start
    ```

3. **Build the application**:
    ```bash
    npm run build
    ```