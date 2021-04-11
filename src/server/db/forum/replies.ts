import { Query } from "..";
import { MysqlResponse } from "../models";

const getAllOnPost = async (postid: number) =>
  Query(
    `SELECT replies.content, users.username, replies._created
	        FROM REPLIES
          INNER JOIN users ON users.id = replies.userid
          INNER JOIN postreplies ON replies.id = postreplies.replyid
	        WHERE postreplies.postid = ?`,
    [postid]
  );

const insert = async (userid: number, content: string) =>
  Query<MysqlResponse>("INSERT INTO replies (userid, content) VALUES (?, ?)", [
    userid,
    content,
  ]);

export default {
  getAllOnPost,
  insert,
};
