import * as express from "express";
import db from "../../db";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await db.forumDB.postsDB.getAll();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  const postid = Number(req.params.id);
  try {
    const post = await db.forumDB.postsDB.getOne(postid);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

router.post("/", async (req, res) => {
  let newPost: {
    userid: number;
    plantid: number;
    title: string;
    content: string;
  } = req.body;
  try {
      const posted = await db.forumDB.postsDB.insert(newPost);
      res.json(posted);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

export default router;