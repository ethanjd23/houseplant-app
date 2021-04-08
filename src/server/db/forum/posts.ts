import { Query } from "..";
import { MysqlResponse } from "../models";

const getAll = async () => Query("SELECT * FROM posts");

const getOne = async (id: number) =>
  Query("SELECT * FROM posts WHERE id = ?", [id]);

const insert = async (newPost: {
  userid: number;
  plantid: number;
  title: string;
  content: string;
}) => Query<MysqlResponse>("INSERT INTO posts SET ?", newPost);

const destroy = async (id: number) =>
  Query("DELETE FROM posts WHERE id = ?", [id]);

export default {
  getAll,
  getOne,
  insert,
  destroy,
};
