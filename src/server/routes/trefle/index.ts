import * as express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://trefle.io/api/v1/plants?token=FZ-NNMVZIvfyiwe_kiwEn_hRBG8PDOmNQx1myC2KeGs"
    );
    const json = await response.json();
    res.send(json);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/:name", async (req, res) => {
  let plantName = req.params.name;
  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants/search?token=FZ-NNMVZIvfyiwe_kiwEn_hRBG8PDOmNQx1myC2KeGs&q=${plantName}`
    );
    const json = await response.json();
    res.send(json);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;