# Task Management Application with TypeScript
Note: Work in progress
## Overview

The Task Management Application is a modern web application built with **React**, **TypeScript**, and **Auth0** that allows users to efficiently create, manage, update, and track tasks. The application demonstrates the practical use of TypeScript for type safety, React Context API for state management, and Auth0 for secure authentication and authorization.

---

## Features

### Task Dashboard

* View all tasks in a centralized dashboard
* Create new tasks
* Edit existing tasks
* Delete tasks
* Filter and organize tasks

### Task Details

* View detailed information for individual tasks
* Update task information
* Track task status and progress

### Task Creation & Editing

* User-friendly forms for creating and updating tasks
* TypeScript-based form validation
* Error handling and feedback messages

### Authentication & Authorization

* Secure user authentication with Auth0
* User registration and login
* Protected routes for authenticated users
* User session management

### State Management

* React Context API for global state management
* Typed React Hooks (`useState`, `useContext`)
* Centralized task and user state

### TypeScript Integration

* Interfaces and type aliases for data structures
* Strict type checking
* Improved code maintainability and readability

---

## Technologies Used

* React
* TypeScript
* React Router
* Auth0
* Context API
* CSS / Tailwind CSS (optional)
* Vite or Create React App

---

## Project Structure

```plaintext
src/
│
├── components/
│   ├── TaskCard.tsx
│   ├── TaskList.tsx
│   ├── Navbar.tsx
│
├── pages/
│   ├── Dashboard.tsx
│   ├── TaskDetails.tsx
│   ├── CreateTask.tsx
│   ├── EditTask.tsx
│   ├── Login.tsx
│
├── context/
│   ├── TaskContext.tsx
│   ├── AuthContext.tsx
│
├── types/
│   ├── Task.ts
│   ├── User.ts
│
├── services/
│   ├── auth0Service.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

---

## Auth0 Configuration

### Create an Auth0 Application

1. Log in to Auth0 Dashboard.
2. Create a new Single Page Application.
3. Copy the following values:

   * Domain
   * Client ID

### Create Environment Variables

Create a `.env` file in the project root:

```env
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
```

For Create React App:

```env
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be available at:

```plaintext
http://localhost:5173
```

---

## Building for Production

```bash
npm run build
```

The production-ready files will be generated in the:

```plaintext
dist/
```

folder.

---

## Viewing the Application

### Local Development

1. Start the development server.

```bash
npm run dev
```

2. Open your browser.

3. Navigate to:

```plaintext
http://localhost:5173
```

### Production Build Preview

```bash
npm run preview
```

Then visit:

```plaintext
http://localhost:4173
```

---

## TypeScript Data Models

### Task Interface

```typescript
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  createdAt: Date;
}
```

### User Interface

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
}
```

---

## Error Handling

The application includes:

* Form validation using TypeScript types
* Required field validation
* Authentication error handling
* Task submission error handling
* User-friendly error messages

---

## Future Enhancements

* Task categories
* Due dates and reminders
* Drag-and-drop task management
* Team collaboration
* Task search and filtering
* Dark mode support
* Backend database integration

---

## Author

**Devin Hazel**

Front-End Developer

Email: [devinhazel@gmail.com](mailto:devinhazel@gmail.com)

---

## License

This project is intended for educational purposes and portfolio demonstration.

