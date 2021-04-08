import { Query } from "..";

const insert = async (postid: number, replyid: number) =>
  Query("INSERT INTO postreplies VALUES (?, ?)", [postid, replyid]);


export default {
    insert
}