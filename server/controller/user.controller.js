import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const secret_key = "hjshs5565qsvgqs5q676s7qgshq";


// =========================
// SIGNUP
// =========================

const signupController = async (req, res) => {

  const body = req.body;


  try {

    // Check fields

    if (!body.Email || !body.Password) {

      return res.status(400).json({
        success: false,
        Message: "All fields are required"
      });

    }


    // Check existing user

    const existingUser = await User.findOne({
      Email: body.Email
    });


    if (existingUser) {

      return res.status(409).json({
        success: false,
        Message: "User already exists"
      });

    }


    // Hash password

    const salt = 10;


    const hashedPassword = await bcrypt.hash(
      body.Password,
      salt
    );


    // Create user

    const data = await User.create({

      Email: body.Email,

      Password: hashedPassword

    });


    // Response

    return res.status(201).json({

      success: true,

      message: "Signup successful",

      user: data

    });


  } catch (err) {

    console.log(err);


    return res.status(500).json({

      success: false,

      Message: "Server error"

    });

  }

};



// =========================
// LOGIN
// =========================

const loginController = async (req, res) => {

  const body = req.body;


  try {

    // Check fields

    if (!body.Email || !body.Password) {

      return res.status(400).json({

        success: false,

        Message: "Email and password are required"

      });

    }


    // Find user

    const user = await User.findOne({

      Email: body.Email

    });


    if (!user) {

      return res.status(404).json({

        success: false,

        Message: "User not found"

      });

    }


    // Compare password

    const matchPassword = await bcrypt.compare(

      body.Password,

      user.Password

    );


    if (!matchPassword) {

      return res.status(401).json({

        success: false,

        Message: "Password does not match"

      });

    }


    // Create JWT

    const token = jwt.sign(

      {

        email: user.Email,

        id: user._id

      },

      secret_key,

      {

        expiresIn: "1d"

      }

    );


    // Response

    return res.status(200).json({

      success: true,

      Message: "Login successful",

      token

    });


  } catch (err) {

    console.log(err);


    return res.status(500).json({

      success: false,

      Message: "Server error"

    });

  }

};



export {
  signupController,
  loginController
};