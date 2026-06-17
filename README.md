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
- <img width="1904" height="929" alt="image" src="https://github.com/user-attachments/assets/325461a3-9945-4e33-9a0b-0c58ff44091f" />

### Dashboard
- Displays employee statistics and quick actions.
<img width="1899" height="994" alt="image" src="https://github.com/user-attachments/assets/56529365-6cb3-4d19-8f0b-bb34fa275c10" />

### Employee List
- View and manage all employees.
<img width="1900" height="1004" alt="image" src="https://github.com/user-attachments/assets/1f25f63c-5744-4403-b817-98b4a75f434f" />

### Add Employee
- You can add employee
- <img width="1907" height="997" alt="image" src="https://github.com/user-attachments/assets/f9615387-60eb-456f-97f2-7fcd687570c2" />

### Settings
- You can change user name or password
- <img width="1909" height="985" alt="image" src="https://github.com/user-attachments/assets/405708cc-33a6-407d-a36f-9bdd58d3839a" />

### Employee Details
- Detailed information for each employee.
- <img width="1860" height="838" alt="image" src="https://github.com/user-attachments/assets/76ac463f-6553-4fd4-9230-cb7167c1a2d0" />


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
