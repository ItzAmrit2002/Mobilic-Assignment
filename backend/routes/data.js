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

router.get("/third", async(req, res) => {
    try {
        const samples = await Sample.find({
            
            last_name: /^M/,
            $expr: { $gt: [{ $strLenCP: '$quote' }, 15] },
            email: { $regex: new RegExp(Sample.last_name) }
        });
        res.json(samples);
    } catch (err) {
        res.status(400).send(err);
    }
})
router.get("/fourth", async(req, res) => {
    try {
        const samples = await Sample.find({
            $or : [{car: "BMW"}, {car: "Mercedes-Benz"}, {car: "Audi"}],
            email : { $not :{ $regex: /[0-9]/ } }
        });
        res.json(samples);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})
router.get("/fifth", async(req, res) => {
    try {
        const samples = await Sample.aggregate([
            {
                $group: {
                  _id: "$city",
                  numUsers: { $sum: 1 },
                  avgIncome: { $avg: "$income" }
                }
              },
              {
                $sort: { numUsers: -1 }
              },
              {
                $limit: 10
              },
              {
                $project: {
                  city: "$_id",
                  numUsers: 1,
                  avgIncome: 1,
                  _id: 0
                }
              }
          ]);
        res.json(samples);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})



module.exports = router;