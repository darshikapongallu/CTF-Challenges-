const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hii");
});
router.post("/register", async (req, res) => {
  const { group,password } =
    req.body;
  if (!group || !password) {
    return res.status(422).json({ error: "the data is not filled" });
  }
  try {
    const check = await User.findOne({ group: group});
    if (check) {
      return res.status(422).json({ error: "This data has already been taken" });
    }
    const response = await new User({
      group,
      password
    });
    await response.save();
    res.json(response);

  } catch (error) {
    res.send(error);
  }
});
router.post('/login1',async (req,res)=>{
    const data = await User.find({})
    res.json(data);
})
module.exports = router;
