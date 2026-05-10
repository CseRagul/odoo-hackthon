import User from "../models/User.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// GENERATE TOKEN
const generateToken = (id) => {

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};




// REGISTER USER
export const registerUser = async (req, res) => {

  try {

    const {
      firstName,
      lastName,
      email,
      phone,
      city,
      country,
      additionalInfo,
      password,
    } = req.body;

    // CHECK EXISTING USER
    const userExists = await User.findOne({
      email,
    });

    if (userExists) {

      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(password, salt);

    // CREATE USER
    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      city,
      country,
      additionalInfo,
      password: hashedPassword,
    });

    // RESPONSE
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",

      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        city: user.city,
        country: user.country,
        additionalInfo: user.additionalInfo,
      },

      token: generateToken(user._id),
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// LOGIN USER
export const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // FIND USER
    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // SUCCESS
    res.status(200).json({
      success: true,
      message: "Login Successful",

      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        city: user.city,
        country: user.country,
        additionalInfo: user.additionalInfo,
      },

      token: generateToken(user._id),
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};