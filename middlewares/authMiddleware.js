const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
const User = require("../models/User");
dotenv.config();



// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(404).send('err')
    } else {
        let user = await User.findById(decodedToken.id);
        req.user = user
        next();
      }
    });
  } else {
    res.status(404).send('no token');
  }
};
// check admin user
const requireAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.send('err')
    } else {
      console.log(decodedToken);
        let user = await User.findById(decodedToken.id);

        if(user.role === 'admin'){
          req.user = user
          next();
        }
        else {
          res.send('require admin')
        }
      }
    });
  } else {
    res.send('no token');
  }
};

const checkTest = async (req, res, next) => {
  const user = "hamri"
  req.user = user
  next()
}


module.exports = { requireAdmin, checkUser, checkTest }
