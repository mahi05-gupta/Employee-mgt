# Employee Management System

A full-stack Employee Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application helps organizations manage employee records efficiently through a modern and responsive interface.

## Features

### Authentication
- User Registration
- User Login
- Protected Routes
- JWT Authentication
- Secure Password Storage

### Employee Management
- Add New Employee
- View Employee Details
- Edit Employee Information
- Delete Employee Records
- Search Employees
- Employee Dashboard

### Dashboard
- Total Employees Count
- Quick Statistics
- Responsive Layout
- Easy Navigation

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Project Structure

```bash
Employee-Management/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/employee-management.git
cd employee-management
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

Backend runs on:

```bash
http://localhost:5000
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Employees

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/employees | Get All Employees |
| GET | /api/employees/:id | Get Employee By ID |
| POST | /api/employees | Add Employee |
| PUT | /api/employees/:id | Update Employee |
| DELETE | /api/employees/:id | Delete Employee |

## Screenshots

### Login Page
- Secure authentication for users.

### Dashboard
- Displays employee statistics and quick actions.

### Employee List
- View and manage all employees.

### Employee Details
- Detailed information for each employee.

## Future Improvements

- Attendance Management
- Leave Management
- Payroll System
- Department Management
- Employee Profile Photos
- Export Data to Excel/PDF
- Dark Mode

## Author

**Mahi Gupta**

## License

This project is licensed under the MIT License.

---
⭐ If you like this project, consider giving it a star.
