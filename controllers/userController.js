const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// module.exports.register = async (req, res) => {
//   const { email, first_name, last_name, phone_number, password } = req.body;
//   console.log(req.body);
//   try {
//     console.log("1");
//     const user = new User({
//       email,
//       first_name,
//       last_name,
//       phone_number,
//       password,
//     });
//     console.log("2");
//     await user.save();
//     console.log("3");
//     const token = createToken({ id: user._id, role: user.role });
//     res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
//     res.status(200).json("register succeed");
//   } catch (err) {
//     console.log("error: ", err);
//     res.status(400).send(err);
//   }
// };

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken({ id: user._id, role: user.role });
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json("login succeed");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.logout = (req, res) => {
  //clear jwt cookie
  return res.status(202).clearCookie("jwt").send("cookie cleared");
};

module.exports.edit_user_info = async (req, res) => {
  const { _id } = req.params;
  const { email, first_name, last_name, phone_number } = req.body;
  try {
    if ((req.user._id = _id)) {
      if (email) {
        await User.updateOne({ _id: req.user._id }, { $set: { email } });
      }
      if (first_name) {
        await User.updateOne({ _id: req.user._id }, { $set: { first_name } });
      }
      if (last_name) {
        await User.updateOne({ _id: req.user._id }, { $set: { last_name } });
      }
      if (phone_number) {
        await User.updateOne({ _id: req.user._id }, { $set: { phone_number } });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.delete_user = async (req, res) => {
  const { _id } = req.params;
  try {
    await User.deleteOne({ _id });
    res.status(200).json("user deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};
