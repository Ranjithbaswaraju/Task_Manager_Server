// const { UserModel } = require("../Models/authModel.js");
// const bcrypt=require("bcryptjs")
// const {cloudinaryFileUpload}=require("../Utils/cloudinary.js")
// const fs=require("fs");

// const getProfile = async (req, res, next) => {
//   try {
//     const user = await UserModel.findById(req.userInfo.id);
//     return res.json(user);
//     res.json(req.userInfo);
//   } catch (error) {
//     next({ statusCode: 400, message: "something went wrong" });
//   }
// };

// const editProfile = async (req, res) => {
//   try {
//     const { name, username, password, email } = req.body;
//     const profileImage=req.file;
//    const fileUrl=await cloudinaryFileUpload(profileImage.path)
   

//     fs.unlinkSync(profileImage.path);
//     const userId=req.userInfo
//     if (name || username || password || email) {
//       const hashPassword=await bcrypt.hash(password,12)
//       const updateUser = await UserModel.findByIdAndUpdate(userId, {
//         name,
//         password:hashPassword,
//         email,
//         username,
//         profilePic:fileUrl
//       },{new:true});
      
//     res.json({message:"profile updated successfully",updateUser});
//     }
    
//   } catch (error) {
//     console.log(error);
//     res.json(error);
//   }
// };

// module.exports = { getProfile, editProfile };

const { UserModel } = require("../Models/authModel.js");
const bcryptjs = require("bcryptjs");
const { cloudinaryFileUpload } = require("../Utils/cloudinary.js");
const fs = require("fs");
exports.getProfile = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.userInfo.id);
    return res.json(user);
  } catch (error) {
    next({ statusCode: 400, message: "Something went wrong" });
  }
};

exports.editProfile = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;
    const profileImage = req.file;
    const fileUrl = await cloudinaryFileUpload(profileImage.path);
    fs.unlinkSync(profileImage.path);
    const userId = req.userInfo;
    // console.log(req.userInfo);
    if (name || username || password || email) {
      const hashPassword = await bcryptjs.hash(password, 12);
      const updateUser = await UserModel.findByIdAndUpdate(
        userId,
        {
          name,
          password: hashPassword,
          email,
          username,
          profilePic: fileUrl,
        },
        { new: true }
      );
      res.json({ message: "Profile updated", updateUser });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};