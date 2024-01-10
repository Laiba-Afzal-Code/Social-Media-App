const router = require("express").Router();
const User = require("../moduls/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    // Genrate bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create newUser
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    // save user and response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

// LogIn
router.post('/login', async (req, res)=>{
    try {
        const user = await User.findOne({email: req.body.email})
        // !user && res.status(400).json("Not Found Any User Here")

        const vailedPassword = await bcrypt.compare(req.body.password, user.password);
        !vailedPassword && res.status(400).json("Worng password-Please write vaildPassword!")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

module.exports = router;
