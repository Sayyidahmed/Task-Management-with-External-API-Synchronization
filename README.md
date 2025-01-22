# Project Setup Instructions
This guide will walk you through setting up the Task Management with External API Synchronization application, including the React frontend and a backend mock API.

# Prerequisites:
Ensure the following are installed on your system:

1. Node.js (14.x or higher): Download and install Node.js.
2. Composer: Download and install Composer.
3. PHP (8.0 or higher): Comes with most web servers or install via php.net.
4. MySQL: Install and configure MySQL (Download MySQL).
5. Git: Download and install Git.

# Backend Setup (Mock API with JSON Server)
1. Clone the Backend Repository:
   git clone https://github.com/Sayyidahmed/Task-Management-with-External-API-Synchronization.git
     cd task-api
2. Install Laravel Dependencies: Run the following command in the backend directory to install Laravel dependencies:
    composer install
3. Set Up Environment File:
  Copy the .env.example file to .env:
4. Open .env and configure your database connection and make the following changes: 
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=task_manager
    DB_USERNAME=root
    DB_PASSWORD=
5. Generate Application Key: Generate the Laravel application key using the following command:
  php artisan key:generate
6. Set Up Database: CREATE DATABASE project
7. create model, database migration, controller using the following command:
   php artisan make:model project -a --api
   update the migration coloumns as you needed in the database
8. Start the Backend Server: Start the Laravel development server:
    php artisan serve
    The backend server will run at http://127.0.0.1:8000.
9. Create a db.json File:
Create a file named db.json in the root directory and add the following sample data:

    {
      "tasks": [
        { "id": 1, "title": "Sample Task 1", "completed": true },
        { "id": 2, "title": "Sample Task 2", "completed": false }
      ]
    }
 10. Start the JSON Server

 # Frontend Setup (React)
  1. Clone the Frontend Repository:
    git clone https://github.com/Sayyidahmed/Project-Management-App.git

  2. Install Frontend Dependencies: Run the following command in the frontend directory to install Node.js dependencies:

    npm install
    Configure API Endpoint:

  3. Locate the axios API call setup in your React project.
    Update the base URL to match your Laravel backend URL and make sure it looks like this code in vite.config.js:
                export default defineConfig({
              plugins: [react()],
              server:{
                proxy:{
                  "/api":{
                    target:"http://127.0.0.1:8000/",
                    changeOrigin:true,
                    headers:{
                      Accept:"application/json",
                      'Content-Type':"application/json"
                    }
                  }
                }
              }
            })


  4. Start the Frontend Server: Start the React development server:

    npm run dev
    The frontend server will run at http://localhost:5173.

  5. Testing the Application
    Access the React App: Open http://localhost:5173 in your browser to use the frontend.
    
