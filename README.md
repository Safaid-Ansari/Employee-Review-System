# Employee-Review-System

## Description

A great project which is use to submit review against each other for employees. And there is an admin
who can see all employees, he can delete any of employee and he can create any employee. An admin can
create any employee to admin

## Tech stack used

MongoDB is used for database, nodejs express as a server and ejs for views templates, javascript for coding
and html, css for designing.

# How to setup the project on local system

1. Clone this project
2. Start by installing npm if you don't have it already.
3. Navigate to Project Directory by : Using

```
cd Employee Review System

```

After reaching to the this project directory yo have to run this following command :

```
$ npm install
$ nodemon index.js or npm start
```

Entering login admin point (important)
using this email and pass login into project please

```

```

## Features

- Admin View

Add/ remove/ update/ view employees

Add/update/view performance reviews

Assign employees to participate in another employee's performance review

Admin can add new employee also by registering

- Employee View

  - List of performance review requiring feedback
  - Submit feedback

- Login

- Register

## Directory Structure

- `/assets/css` - all css code
- `/assets/img` - all the images
- `/config` - MongoDB Atlas Configuration
- `/controllers` - questions & option controllers code
- `/model` - review and users.
- `/routes` - all routes according to admin and employee is here
- `/views` - all ejs files
- `index.js` - entry file
