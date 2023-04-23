const router = require("express").Router();
const Sample = require("../models/Sample");

router.get("/", async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/first", async(req, res) => {
    try {
        const samples = await Sample.find({
            $or : [{car: "BMW"}, {car: "Mercedes-Benz"}],
            income : {$lt: "$5"}
            
        });
        res.json(samples);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

router.get("/second", async(req, res) => {
    try {
        const samples = await Sample.find({
            "$expr" : {"$gt" : [{"$toInt" :"$phone_price"} , 10000]},
            gender: "Male"
        });
        res.json(samples);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})



module.exports = router;