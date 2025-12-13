const bcryptjs = require("bcryptjs");
const { UserModel } = require("../Models/authModel.js");
const { generateToken } = require("../Utils/token.js");
const dotenv = require("dotenv");

dotenv.config();

const signupController = async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hashSync(password, 12);

    const user = new UserModel({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
    });

    const result = await user.save();
    res.json(result);
  } catch (error) {
    const err = { statusCode: 400, message: error.message };
    next(err);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await UserModel.findOne({ email: email });
    const decodePassword = await bcryptjs.compare(password, findUser.password);
    if (decodePassword) {
      const token = await generateToken(findUser);
      const user=await UserModel.findById(findUser._id).select(["-password","-__v","-createdAt","-updatedAt"])
      res
        .status(200)
        .json({ message: "Login Succesfully", user, token });
    } else {
      res.status(429).json({ message: "invalid email/password" });
    }
  } catch (error) {
    const err = { statusCode: 400, message: error.message };
    next(err);
  }
};

module.exports = { signupController, loginController };
