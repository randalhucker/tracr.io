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
- **NodeJS**: Install NodeJS using [Node Version Manager](https://github.com/coreybutler/nvm-windows) or from [NodeJS's official website](https://nodejs.org/dist/v22.2.0/node-v22.2.0-x64.msi).

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/randalhucker/tracr.io.git
   cd tracr.io
   ```

2. **Set up environment variables**:
   - Create a .env file in the root of the project and add the following environment variables:
     ```dotenv
     # Environment variables declared in this file are automatically made available to Prisma.
     # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

     # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
     # See the documentation for all the connection string options: https://pris.ly/d/connection-strings
     DATABASE_URL="postgresql://sssadmin:ssspassword@postgres:5432/supershoppingservice?schema=public"

     # DATABASE_URL="postgresql://tracradmin:tracrpassword@localhost:5432/tracrio?schema=public" # DATABASE_URL_DEV
     ```

## Running the Application

1. **Build and start the application**:

   ```bash
   docker-compose up --build
   ```

2. **The application should now be running at http://localhost:3000.**

3. **Start the electron app**:
   ```bash
   npm run electron
   ```

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

4. **Pushing Prisma Migrations**:

   - Change the prisma schema db url from DATABASE_URL to DATABASE_URL_DEV.
   - Run the following command to create a new migration:

     ```bash
     npx prisma migrate dev --name <migration-name>
     ```
     
   - Change the prisma schema db url back from DATABASE_URL_DEV to DATABASE_URL.