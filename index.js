const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

console.log(process.env.SECRET_KEY);

const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

// get all posts

app.get("/posts", async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany();
    res.json(allPosts);
  } catch (error) {
    console.error("Error opening posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const { id } = req.params;
    console.log(id);

    const postId = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(postId);
  } catch (error) {
    console.error("Error opening posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// create a function to add a new post
async function addPost() {
  // let newPost = Prisma.Post
  const post = await prisma.Post.create({
    data: {
      author: "Farida",
      title: "First post",
      content: "First post",
      cover: "http://images.com",
    },
  });
  try {
    console.log("Post has been added");
  } catch (err) {
    console.error("Error adding a post");
    console.log(err.message);
  }
}

app.post("/posts", async (req, res) => {
  try {
    const { author, title, content, cover } = req.body;
    if (!author || !title || !content) {
      return res
        .status(400)
        .json({ error: "Author, title and content are required" });
    }
    console.log("received data:", { author, title, content, cover });
    await addPost(author, title, content, cover);
    res.status(201).json({ message: "Post has been added successfully" });
  } catch (err) {
    console.error("Error in /posts:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/posts/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    console.log(id);

    const updatePost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
        content: content,
      },
    });
    res.json(updatePost);
  } catch (err) {
    console.error("Error in /posts/:id:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deletePost);
  } catch (err) {
    console.error("Error in /posts/:id:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = 3007;
app.listen(port, () => {
  console.log("This server is running on port 3007");
});
