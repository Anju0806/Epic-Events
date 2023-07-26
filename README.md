# Social Network API using MongoDB and Express.js
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## Description

This is the backend API for a social network web application, built using Express.js and MongoDB. The API allows users to share their thoughts, react to friends' thoughts, and manage their friend list. MongoDB is used as the database to handle large amounts of unstructured data efficiently. The Mongoose ODM is utilized to define and interact with the MongoDB data models.

## Table of Contents

Installation
Usage
API Routes
Walkthrough Video
License
Contributing
Questions


## Installation

To install the required dependencies, run the following command:

    npm install

## Usage

To start the server and sync the Mongoose models to the MongoDB database, run:

    node server.js

## API Routes

- The API provides the following routes:

- GET /api/users: Get all users and their details.

- GET /api/users/:userId: Get a specific user and their details.

- POST /api/users: Create a new user.

- PUT /api/users/:userId: Update an existing user.

- DELETE /api/users/:userId: Delete a user and their associated thoughts.

- GET /api/thoughts: Get all thoughts and their details.

- GET /api/thoughts/:thoughtId: Get a specific thought and its details.

- POST /api/thoughts: Create a new thought for a user.

- PUT /api/thoughts/:thoughtId: Update an existing thought.

- DELETE /api/thoughts/:thoughtId: Delete a thought.

- POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.

- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction from a thought.

- POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.

- DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

## Walkthrough Video

Link to the Walkthrough Video

## License

This project is licensed under the terms of the MIT license.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request.

## Questions

If you have any questions or need further assistance, please feel free to reach out.

Email: anjualfino@gmail.com




