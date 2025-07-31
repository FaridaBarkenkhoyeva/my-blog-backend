# Phase 1: Planning and Initial Setup - The Absolute Basics

This is where you'll get organized and prepare your workspace.

## Step 1.1: Project Understanding & Personal Planning

* **Read All Requirements**: Thoroughly read through the project brief. Understand the goal: a full-stack blog using React for the frontend and Node.js with PostgreSQL for the backend. Note down all the required pages, features, and endpoints.
* **Define Blog Topic**: Choose a subject for your blog (e.g., a "Foodie Adventures" blog, a "DIY Projects" blog).
* **Outline Basic Features**: Mentally (or physically, on paper) sketch out how users will interact with each part of the blog. For example, on the main page, users should see a list of posts with short summaries. The "Create Post" page needs a form.
* **Choose a Task Management Style**: Decide how you'll keep track of your own progress. You can use a simple list, or a dedicated online tool if you prefer.

## Step 1.2: GitHub Repository Setup

This step sets up your personal version control for code.

* **Create Frontend GitHub Repo**: Go to GitHub.com and create a new, private repository. Give it a clear name like `my-blog-frontend`. This repo will hold all your React code.
* **Create Backend GitHub Repo**: Still on GitHub, create a second new, private repository. Name this one something like `my-blog-backend`. This repo will hold all your Node.js server code.
* **Set Up Basic Branches**: Even for an individual project, it's good practice to create a new branch specifically for a new feature or fix (e.g., a branch named `feature/homepage-display` or `bugfix/delete-error`).
* **Establish Pull Request Rule**: Make it a strict personal rule that you don't directly save changes to the main branch. All completed work should be submitted through a Pull Request (PR) from your feature branch. This reinforces good habits and provides a clear history of your changes.

## Step 1.3: PostgreSQL Database Setup (Using Neon DB)

Here you'll set up your cloud-hosted PostgreSQL database using Neon.

* **Sign Up for Neon**: Go to [Neon.tech](https://neon.tech) and sign up for an account. They offer a generous free tier that's perfect for this project.
* **Create Your Neon Project**: Once logged in, create a new project. Neon will automatically set up a default database for you within this project. You'll see a dashboard with your database details.
* **Locate Your Connection String**: On your Neon project dashboard, look for the "Connection String" or "Connect" section. Copy the provided connection string. This single string contains all the necessary information (username, password, host, port, database name) for your Node.js backend to connect to your Neon database.
* **Access the SQL Editor**: Within your Neon project dashboard, find and open the SQL Editor. This is where you'll run commands directly on your database.
* **Create the `posts` Table**: In the SQL Editor, you'll execute a command to create a table named `posts`. This table is like a digital spreadsheet designed to hold all your blog post information.

This command will specify the columns for the table:

* **An `id` column**: This will be a unique number for each post, and it will automatically increase for every new post you add. It's the primary way to identify each post.

* **An `author` column**: To store the name of who wrote the post.

* **A `title` column**: To store the heading of the blog post. This field cannot be left empty.

* **A `content` column**: For the main body text of the blog post. This also cannot be left empty.

* **A `cover` column**: To store a web address (URL) for an image that will be the cover photo for the post. This cannot be left empty.

* **A `date` column**: This will automatically record the exact time the post was created.

* **Verify Table Creation**: After running the command, check the sidebar or schema view in Neon to make sure the `posts` table appeared correctly with all the columns you defined.

---

# Phase 2: Backend Development (Node.js API) - Building the Server

This is where you'll build the part of your application that fetches, saves, updates, and deletes your blog posts from the database.

## Step 2.1: Node.js Project Initialization

Setting up the basic structure for your server-side code.

* **Create Backend Project Folder**: Inside the `my-blog-backend` repository folder you cloned to your computer, create a new sub-folder. You might name it `server` or `api`.
* **Initialize Node.js Project**: Open your computer's terminal (command prompt/PowerShell/bash), navigate into the server folder you just created, and run a command that will set up a new Node.js project. This creates a file called `package.json`.
* **Install Core Dependencies**:

  * `pg`: Helps your Node.js server talk to PostgreSQL.
  * `dotenv`: Manages sensitive data like your DB string.
  * `nodemon`: Automatically restarts your server on file changes.
* **Create Main Server File**: Create a new file named `server.js` or `app.js`.
* **Create `.env` File**: Store sensitive information here (like your DB connection). Also, add `.env` to `.gitignore`.

## Step 2.2: Connect Node.js to PostgreSQL (Neon DB)

Making sure your server can communicate with your Neon database.

* **Add Database Credentials to `.env`**:

  ```
  DATABASE_URL="postgresql://user:password@host:port/database"
  ```
* **Import Packages in `server.js`**
* **Configure Database Pool**
* **Test Database Connection**
* **Start Server with Nodemon**

## Step 2.3: Create Core API Endpoints

Define how your server responds to requests from the frontend.

* **Set Up HTTP Server** with support for JSON and CORS
* **GET /posts**: Retrieve all posts
* **GET /posts/\:id**: Retrieve single post by ID
* **POST /posts**: Create a new post
* **PUT /posts/\:id**: Update a post
* **DELETE /posts/\:id**: Delete a post
* **Final Server Check**: Ensure everything runs via nodemon

## Step 2.4: Test Your Backend API

Use Postman or Insomnia to test:

* **GET /posts**
* **POST /posts**
* **GET /posts/\:id**
* **PUT /posts/\:id**
* **DELETE /posts/\:id**

---

# Phase 3: Frontend Development (React) - Building the User Interface

## Step 3.1: React Project Setup

* **Create Frontend Folder**: e.g., `client` or `app`
* **Initialize with Vite**
* **Install Dependencies**
* **Install React Router**
* **Install Axios (optional)**
* **Clean Up Boilerplate**

## Step 3.2: Set Up React Router

* **Import Router Components**
* **Wrap App with Router**
* **Define Routes** (`/`, `/create-post`, `/posts/:id`, `/posts/:id/edit`)
* **Verify Navigation Works**

## Step 3.3: Develop Your Frontend Pages

### 3.3.2.1 Homepage (HomePage.jsx)

* **Create File**
* **Fetch Data from Backend**
* **Display List of Posts**
* **Link Each Post to Details Page**
* **Update App.jsx and Test**

### 3.3.2.2 Create Post Page (CreatePostPage.jsx)

* **Create File and Form**
* **Handle Input and State**
* **Form Validation**
* **Submit to Backend (POST)**
* **Redirect or Show Confirmation**
* **Update App.jsx and Test**

### 3.3.2.3 Post Details Page (PostDetailsPage.jsx)

* **Create File**
* **Fetch by ID**
* **Display Full Post**
* **Add Delete Button** (with confirmation)
* **Add Update Button** (navigate to edit page)
* **Update App.jsx and Test**

### 3.3.2.4 Update Post Page (UpdatePostPage.jsx) – Optional

* **Create File**
* **Fetch Post and Pre-fill Form**
* **Submit Updated Data via PUT**
* **Redirect to Details Page After Success**
* **Update App.jsx and Test**

---

# Phase 4: Integration, Refinement, and Presentation - Bringing It All Together

## Step 4.1: Integrate Frontend and Backend

* **Check All API URLs**
* **Ensure Backend is Running**

## Step 4.2: Error Handling & User Feedback

* **Loading States**
* **Frontend Error Messages**
* **Enhanced Validation**
* **Test Backend Errors**

## Step 4.3: Styling and User Experience (UX)

* **Add Basic CSS**
* **Responsive Design (optional)**

## Step 4.4: Testing and Debugging

* **Manual End-to-End Testing**
* **Edge Case Handling**
* **Browser Developer Tools (Console, Network, Elements)**
* **Backend Terminal Logging**

## Step 4.5: Prepare for Presentation

* **Final Code Review**
* **Remove Debug Logs and Unused Code**
* **Write README for Backend**
* **Write README for Frontend**
* **Practice Demo**

---
