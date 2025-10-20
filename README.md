# Full Stack Todo App

This is a **Full-Stack Todo CRUD Application** built with the following stack:

- **Frontend**: React (with Redux for state management), Bootstrap for styling
- **Backend**: Node.js with Express to serve APIs
- **Database**: Supabase (PostgreSQL for storing todos)
- **Authentication**: Supabase for login and signup functionality

## Features

- **CRUD Operations** for Todos (Create, Read, Update, Delete)
- **User Authentication** (Login and Signup)
- Responsive UI with **Bootstrap**

---

## 🧰 Technologies Used

- **Frontend**: 
  - React.js
  - Redux
  - Bootstrap 5

- **Backend**: 
  - Node.js
  - Express
  - Supabase (for database and authentication)

- **Database**: Supabase (PostgreSQL)

---

## 📦 Project Setup

### 1. **Clone the Repository**

```bash
git clone https://github.com/..
cd To-Do
````

### 2. **Frontend Setup**

#### Install Frontend Dependencies

Go to the **`client/`** directory and install the frontend dependencies:

```bash
cd client
npm install
```

#### Vite Setup for React

The frontend is set up with **Vite** for fast development.

To run the frontend locally:

```bash
npm run dev
```

---

### 3. **Backend Setup**

#### Install Backend Dependencies

Go to the **`server/`** directory and install the backend dependencies:

```bash
npm install
```

#### Create Environment Variables

In the **`root`** directory, create a `.env` file and add your Supabase credentials:

```env
SUPABASE_URL=https://your-supabase-url
SUPABASE_KEY=your-supabase-key
PORT=5000
```

#### Start the Backend Server

To start the backend server, run:

```bash
npm start
```

The backend API will be available at `http://localhost:5000`.

---

## 🔧 Endpoints

### 1. **Authentication**

#### Signup (POST `/api/signup`)

Registers a new user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

#### Login (POST `/api/login`)

Logs in an existing user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```


---

### 2. **Todo CRUD Operations**

#### Create Todo (POST `/api/todos`)

Creates a new todo item.

**Request Body:**

```json
{
  "text": "My first todo",
  "id": "id"
}
```

#### Get Todos (GET `/api/todos`)

Retrieves all the todos for the logged-in user.

#### Update Todo (PUT `/api/todos/:id`)

Updates an existing todo.

**Request Body:**

```json
{
  "text": "Updated Todo",
}   
```
#### Updat status of  Todo (PATCH `/api/todos/:id`)

Updates an existing todo status.


#### Delete Todo (DELETE `/api/todos/:id`)

Deletes a todo item.

---

## 🎨 UI Design

The frontend uses **Bootstrap** for styling

---

## ⚙️ Redux Store

The app uses **Redux** for state management:

* **Actions** to handle authentication, fetching todos, and updating todos.
* **Reducers** to manage user authentication state and todos state.

### Actions

* `auth/login` – for logging in a user
* `auth/logout` – for logging out a user
* `todos/fetchTodos` – for fetching all todos
* `todos/addTodo` – for adding a new todo
* `todos/updateTodo` – for updating a todo
* `todos/deleteTodo` – for deleting a todo

---

## 🌐 Deploying to Production

### 1. **Frontend Deployment**

The frontend is deployed to platforms **Vercel**.

1. Build the frontend with `npm run build` to generate static files in the `client/dist/` folder.
2. Deploy the contents of the `client/dist/` directory to vercel.

### 2. **Backend Deployment**

The backend can be deployed to **Vercel**.

1. Set the correct environment variables for Supabase and the app's port in the platform's settings.
2. Deploy the backend by pushing it to your Git repository or by directly deploying to your platform.

---

## 🔑 Supabase Setup

1. Go to [Supabase](https://supabase.io/).
2. Create a new project and set up your PostgreSQL database.
3. Enable **Authentication** to handle user signup and login.
4. Create a **table for todos** with the following columns:

   * `id`: Primary Key (Auto increment)
   * `user_id`: Foreign Key to link todos with a user
   * `title`: String (Text)
   * `completed`: Boolean (default: false)
5. Update the **.env** file in the `root/` directory with your Supabase credentials.

---

---

### Explanation:

- **Authentication Routes**: Login and signup routes are defined to use **Supabase** for handling user authentication.
- **Todo CRUD Operations**: Create, Read, Update, and Delete functionalities are implemented for a **Todo** app.
- **Redux** is used for state management, handling the user session and todos.
- **Supabase** is used for both authentication and database, storing user and todo information in a PostgreSQL database.
- **Bootstrap** is used for styling the app, making it responsive across different screen sizes.

```

