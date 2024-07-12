# Task Manager API

This is a RESTful API for managing tasks, built using Node.js and Express.js. It allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks.

## Features

### User Authentication and Management
- **Register user:** create new user with name,email and password.
- **Login user:** authenticate the user with username and password
- **view profile:** view user profile of logged in user

### Task Management
- **Create tasks:** Add new tasks with a title, description, and completion status.
- **Retrieve tasks:** Get a list of all tasks.
- **Update tasks:** Update the details or completion status of an existing task.
- **Delete tasks:** Remove a task from the list.
- **assign tasks:** assign perticular task to teams

### Teams Management
- **Create team:** Add new tasks with a name, members.
- **Retrieve tasks:** Get a list of all teams.
- **join tasks:** allow the user to join the team.

## Installation

1. Clone the repository:

git clone  https://github.com/AirtribeProjects/TaskManager2.git

2. Navigate to the project directory:

cd TaskManager2

3. Install dependencies:

npm install express mongoose bcryptjs jsonwebtoken dotenv

## Usage

1. Start the server:

node app.js

2. Use Postman or any HTTP client to interact with the API.

## Endpoints

### Authentication
Register
URL: /register
Method: POST
Request Body:
{
  "userName": "yourname",
  "emailId": "yourname@example.com",
  "password": "yourpassword"
}

login
URL: /login
Method: POST
Request Body:

{
  "usename": "name",
  "password": "yourpassword"
}

### Task Management
Create Task
URL: /tasks
Method: POST
Request Body:
{
  "title": "Task Title",
  "description": "Task Description",
  "dueDate": "2021-07-10"
}

get All Tasks (With Filtering)
URL: /tasks
Method: GET
Query Parameters:
status (optional)

Assign Task
URL: /tasks/:taskId/assign
Method: POST
Request Body:
{
  "assignedTo": "user_id"
}

### Team Management
Create Team
URL: /teams
Method: POST
Request Body:
{
  "name": "Team Name",
  "members": ["user_id_1", "user_id_2"]
}

Get Teams
URL: /api/teams
Method: GET


Join Team
URL: /api/teams/:teamId/join
Method: POST
Request Body:
{
  "userId": "user_id"
}

## Error Handling

- Proper error handling is implemented for invalid requests.
- Input validation is performed for task creation and updates.










