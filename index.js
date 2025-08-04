const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");
const cors = require("cors");
app.use(cors());

console.log(process.env.SECRET_KEY);

// Create connection pool
const pool = new Pool({
  connectionString: process.env.NEON_DB,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to Neon PostgreSQL database");
  release();
});


async function createTable() {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS posts (
       id SERIAL PRIMARY KEY, author TEXT NOT NULL, title TEXT, content TEXT, cover TEXT, date DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`
    );
    console.log("Posts table is ready");
  } catch (err) {
    console.error("Error creating a table:", err);
    console.log(err.message);
  }
}

createTable();

//retrieve all posts
// app.get('/', (req, res) => {
//   res.send('GET request to the homepage');
// });



//create a function to add a new post
async function addPost(author, title, content, cover) {
  const addingPost = `Insert into posts (author, title, content, cover) values ('${author}', '${title}', '${content}', '${cover}')`;
  try {
    await pool.query(addingPost);
    console.log("Post has been added");
  } catch (err) {
    console.error("Error adding a post");
    console.log(err.message);
  }
}

app.post("/newPost", async (req, res) => {
  try {
    const { author, title, content, cover } = req.body;
    if (!author || !title || !content || !cover) {
      return res
        .status(400)
        .json({ error: "Author, title, content and cover are required" });
    }
    console.log("received data:", { author, title, content, cover });
    await addPost(author, title, content, cover);
    res.status(201).json({ message: "Post has been added successfully" });
  } catch (err) {
    console.error("Error in /newPost:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = "3007";
app.listen(port, (req, res) => {
  console.log("This server is running on port 3007");
});
