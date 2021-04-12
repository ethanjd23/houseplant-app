import * as express from "express";
import db from "../../db";

const router = express.Router();

router.get('/:postid', async (req, res) => {
    const postid = Number(req.params.postid);
    try {
        let replies = await db.forumDB.repliesDB.getAllOnPost(postid);
        res.json(replies);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.post("/:postid", async (req, res) => {
  const postid = Number(req.params.postid);
  const newReply: { userid: number; content: string } = req.body;
  try {
    const posted = await db.forumDB.repliesDB.insert(
      newReply.userid,
      newReply.content
    );
    console.log(posted);
    const manyToManyPosted = await db.forumDB.postrepliesDB.insert(
      postid,
      posted.insertId
    );
    console.log(manyToManyPosted);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;