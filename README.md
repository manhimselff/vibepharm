# VibePharm - Pharmacy Management System

A modern, full-stack pharmacy management system built with React, Node.js, Express, and PostgreSQL.

## Features

- User Authentication & Authorization
- Role-based Access Control (Admin, Pharmacist, Clerk)
- Inventory Management
- Sales Processing
- Dashboard Analytics
- User Management

## Tech Stack

### Frontend
- React
- React Router DOM
- Bootstrap
- Axios

### Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL
- npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd vibepharm
```

2. Install Server Dependencies
```bash
cd server
npm install
```

3. Set up Environment Variables
Create a `.env` file in the server directory with:
```
DATABASE_URL="postgresql://username:password@localhost:5432/vibepharm"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

4. Install Client Dependencies
```bash
cd ../client
npm install
```

5. Run the Application
Server:
```bash
cd server
npm run dev
```

Client:
```bash
cd client
npm start
```

## Project Structure

```
vibepharm/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── services/
└── server/
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── middleware/
    │   └── utils/
    └── prisma/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.