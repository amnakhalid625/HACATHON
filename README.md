# Notes App

A fully responsive Notes App built using **React** with user authentication, JWT token-based security, and CRUD operations.

## 📽️ Project Demo
[![Watch the Video](https://img.shields.io/badge/Watch%20Demo-Click%20Here-red)](https://drive.google.com/file/d/1zK_GhG1_AWUurqFcEHYjEJBqAscMeOsz/view?usp=drive_link)

## 🚀 Features
- **User Authentication**: Register and login functionality with JWT token security.
- **Create Notes**: Users can add, edit, and delete notes.
- **Protected Routes**: Notes are accessible only to authenticated users.
- **Fully Responsive**: Optimized for all devices.
- **React Router**: Implemented for seamless navigation.

## 🛠️ Technologies Used
- React.js
- Tailwind CSS
- React Router
- Axios
- JWT Authentication
- Node.js (Backend)
- Express.js (Backend)
- MongoDB (Database)

## 📥 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/amnakhalid625/HACATHON.git
   ```
2. Navigate to the project folder:
   ```sh
   cd HACATHON
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the frontend:
   ```sh
   npm start
   ```
5. Navigate to the backend folder and install dependencies:
   ```sh
   cd backend
   npm install
   ```
6. Start the backend server:
   ```sh
   npm run dev
   ```

## 🌍 API Endpoints
### User Authentication
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login and receive a JWT token

### Notes
- **POST /api/note/add** - Create a new note

## 💡 Contribution
Feel free to fork this repository and contribute by submitting a pull request. 😊

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
