import { Query } from "./index";
import { MysqlResponse } from "./models";

const getUserPlants = async (userid: number) =>
  Query(`SELECT * FROM userplants WHERE userid = ?`, [userid]);

const insert = (newPlants: {
  userid: number;
  plantid: number;
  plant_name: string;
}) => Query<MysqlResponse>("INSERT INTO userplants SET ?", newPlants);

const update = (plant_name: string, userid: number, plantid: number) =>
  Query(
    "UPDATE userplants SET plant_name = ? WHERE userid = ? AND plantid = ?",
    [plant_name, userid, plantid]
  );

const destroy = (userid: number, plantid: number) =>
  Query("DELETE FROM userplants where userid = ? AND plantid = ?", [
    userid,
    plantid,
  ]);

export default {
  getUserPlants,
  insert,
  update,
  destroy,
};
