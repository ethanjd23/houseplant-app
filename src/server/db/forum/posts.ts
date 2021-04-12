import { Query } from "..";
import { MysqlResponse } from "../models";

const getAll = async () =>
  Query(`SELECT posts.id, posts.title, posts.content, posts._created, plants.name, users.username
          FROM posts
          INNER JOIN plants ON posts.plantid = plants.id
          INNER JOIN users ON posts.userid = users.id`);

const getOne = async (id: number) =>
  Query(
    `SELECT posts.title, posts.content, posts._created, plants.name, users.username
        FROM posts
        INNER JOIN plants ON posts.plantid = plants.id
        INNER JOIN users ON posts.userid = users.id
        WHERE posts.id = ?`,
    [id]
  );

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
