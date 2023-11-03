# mongomedia

## Description
mongomedia is a social media application that uses a NoSQL database to handle large amounts of unstructured data. It provides a RESTful API for managing users, thoughts, reactions to thoughts, and a user's friend list.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
To get started with mongomedia, follow these steps:
    1. Clone this repository to your local machine:
        ```bash
        git clone https://github.com/your-username/mongomedia.git
    2. Install the required dependencies using npm or yarn:
            cd mongomedia
            npm install
            or
            yarn install
    3. The server will be up and running, and the Mongoose models will be synced to the MongoDB database.
    
## Usage
Once the application is running, you can use Insomnia or any API testing tool to interact with the API. The API provides the following routes:

GET /api/users: Retrieve a list of all users.

GET /api/users/:userId: Retrieve a single user by ID, including their friends and thoughts.

POST /api/users: Create a new user.

PUT /api/users/:userId: Update an existing user.

DELETE /api/users/:userId: Delete a user and their associated thoughts.

POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.

DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

GET /api/thoughts: Retrieve a list of all thoughts.

GET /api/thoughts/:thoughtId: Retrieve a single thought by ID.

POST /api/thoughts: Create a new thought.

PUT /api/thoughts/:thoughtId: Update an existing thought.

DELETE /api/thoughts/:thoughtId: Delete a thought.

POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.

DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

## Contributing
contributions from the community! If you'd like to contribute to mongomedia, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your branch to your forked repository.
Submit a pull request to the main repository.

## Tests
To run tests for mongomedia, use the following command:
    npm test
    or
    yarn test

## License
This project is licensed under the MIT license.

## Questions
For any questions, please contact me:
- GitHub: [Pokepoison](https://github.com/Pokepoison)

  
