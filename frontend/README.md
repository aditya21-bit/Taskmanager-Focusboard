# FocusBoard -- Personal Productivity Dashboard

## Overview

FocusBoard is a modern full-stack MERN productivity dashboard that helps
users manage daily tasks efficiently using the MERN stack.

## Features

### Authentication

-   Register
-   Login
-   Logout
-   JWT Authentication
-   Protected Routes

### Task Management

-   Create, Edit, Delete Tasks
-   Mark Pending/Completed
-   Search Tasks
-   Filter by Category
-   Filter by Priority
-   Dashboard Statistics

## Tech Stack

**Frontend:** React.js, Vite, HTML, CSS, JavaScript, React Router DOM,
Axios, React Icons, React Toastify

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs,
dotenv, CORS

## Folder Structure

``` text
frontend/
  src/
    components/
    pages/
    routes/
    services/
backend/
  config/
  middleware/
  models/
  routes/
```

## Installation

### Backend

``` bash
cd backend
npm install
npm run dev
```

### Frontend

``` bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Backend:

``` env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Frontend:

``` env
VITE_API_URL=http://localhost:5000/api
```

## API

### Auth

-   POST /api/auth/register
-   POST /api/auth/login

### Tasks

-   GET /api/tasks
-   POST /api/tasks
-   PUT /api/tasks/:id
-   PATCH /api/tasks/:id
-   DELETE /api/tasks/:id

## Future Improvements

-   SweetAlert2
-   Loading Spinner
-   Dark Mode
-   Calendar View

## Author

**Aditya Gupta**

BCA Student | MERN Stack Developer
