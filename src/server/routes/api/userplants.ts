import * as express from "express";
import { authenticate } from "passport";

import db from "../../db";

const router = express.Router();

router.get("/:id", async (req, res) => {
  let userid = Number(req.params.id);
  try {
    res.json(await db.userplantsDB.getUserPlants(userid));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/:id", async (req, res) => {
  const newPlant: { userid: number; plantid: number; plant_name: string } =
    req.body;
  try {
    const posted = await db.userplantsDB.insert(newPlant);
    res.json(posted);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  let plant: {userid: number; plantid: number;} = req.body;
  try {
    let result = await db.userplantsDB.destroy(plant.userid, plant.plantid);
    res.json(await result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

export default router;
