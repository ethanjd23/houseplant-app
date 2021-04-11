import { Query } from "./index";
import { MysqlResponse } from "./models";

const getUserPlants = async (userid: number) =>
  Query(
    `SELECT userplants.plant_name, plants.name, users.username, plants.water, plants.sunlight
	    FROM userplants 
	    INNER JOIN plants ON userplants.plantid = plants.id
      INNER JOIN users ON userplants.userid = users.id
      WHERE userid = ?`,
    [userid]
  );

const insert = (newPlant: {
  userid: number;
  plantid: number;
  plant_name: string;
}) => Query<MysqlResponse>("INSERT INTO userplants SET ?", newPlant);

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
