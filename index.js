const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();


const cors = require("cors");
app.use(cors());

console.log(process.env.SECRET_KEY);

const { PrismaClient, Prisma } = require("./generated/prisma");
const prisma = new PrismaClient();

// create a function to add a new post
async function addPost() {
  // let newPost = Prisma.Post
  const post = await prisma.Post.create({
    data: {
      author: "Farida",
      title: "First post",
      content: "First post",
      cover: "http://images.com"
    },
  });
  try {
    
    console.log("Post has been added");
  } catch (err) {
    console.error("Error adding a post");
    console.log(err.message);
  }

  
}

addPost();

// app.post("/newPost", async (req, res) => {
//   try {

//   // const post = await prisma.post.create({
//   //   data: {
//   //     author: "Milana",
//   //     title: "First try",
//   //     content: "Starting a new Post with this new exciting content!",
//   //     cover: "http://image.com", }})

//   }});
// try {
//   const { author, title, content, cover } = req.body;
//   if (!author || !title || !content || !cover) {
//     return res
//       .status(400)
//       .json({ error: "Author, title, content and cover are required" });
//   }
//   console.log("received data:", { author, title, content, cover });
//   await addPost(author, title, content, cover);
//   res.status(201).json({ message: "Post has been added successfully" });
// } catch (err) {
//   console.error("Error in /newPost:", err);
//   res.status(500).json({ error: "Internal server error" });
// }

const port = "3007";
app.listen(port, (req, res) => {
  console.log("This server is running on port 3007");
});
