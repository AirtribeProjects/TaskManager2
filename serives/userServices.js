const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const registerUser = async(userInfo) => {
        const hashedPassword = await bcrypt.hash(userInfo.password,10);
        const newUser = new User({
          userName: userInfo.userName,
          emailId: userInfo.emailId,
          password: hashedPassword,
        });
        await newUser.save();
        const userData = {
            newUser: {
              id: newUser.id,
            },
          };
          const jwtToken = jwt.sign(userData,process.env.SECRET_KEY,{expiresIn:'2h'}) ;
          return jwtToken;

}

const loginUser = (password, userPassword) => {
     const isPassowrdValid = bcrypt.compareSync(password,userPassword);
     return isPassowrdValid;
}

const getProfile = async(userId) => {
    const user = await User.findById(userId);
    return user;
}

module.exports = {registerUser,loginUser,getProfile};