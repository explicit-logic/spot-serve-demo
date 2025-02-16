# To Do App

A modern task management application with a separate frontend and backend architecture.

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- A running PostgreSQL instance (if using PostgreSQL as database)

## Getting Started

Follow these steps to set up and run both the backend and frontend components of the application.

### Backend Setup

1. Navigate to the backend directory:
```sh
cd backend
```

2. Configure the environment:
```sh
cp .env.example .env
```

3. Open `.env` and update the configuration parameters with your database credentials and other required settings.

4. Install dependencies:
```sh
npm install
```

5. Start the backend server:
```sh
npm run start
```

The backend server should now be running at `http://localhost:5000` (or your configured port).

### Frontend Setup

1. Navigate to the frontend directory:
```sh
cd frontend
```

2. Configure the environment:
```sh
cp .env.example .env
```

3. Update the `.env` file with the correct backend API URL and any other required configuration.

4. Install dependencies:
```sh
npm install
```

5. Build and run the frontend application:
```sh
npm run build
```

6. To start the application in development mode:
```sh
npm run dev
```

## Available Scripts

### Backend
- `npm run start` - Starts the production server
- `npm run dev` - Starts the development server with hot-reload

### Frontend
- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs the linter
