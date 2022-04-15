const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

// app.get("/", async (req, res) => {
//   res.send("Hello from dinesh");
// });

//We will handle post requ,,, e.e. add data to our db

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MensRanking(req.body);
    console.log(req.body);
    const result = await addingMensRecord.save();

    res.status(201).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const result = await MensRanking.find({});
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get request of individual
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await MensRanking.findById({ _id });
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});
//update
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});
//delete
router.delete("/mens/:id", async (req, res) => {
  try {
    const result = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
