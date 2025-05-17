import { request, response } from "express";
import bcrypt from "bcryptjs";
import User from "../db/models/user.model.js";

export async function signup(req = request, res = response) {
  try {
    const { email, password, name, username } = req.body;

    if (!email || !password || !name || !username) {
      res.status(400).json({
        error: "All fields are required",
      });
    }

    const user = await User.findOne({
      $or: [
        {
          username: username,
        },
        {
          email: email,
        },
      ],
    });

    if (user) {
      const isUsernameUsed = user.username === username;
      const isEmailUsed = user.email === email;
      let param = "";
      if (isUsernameUsed) {
        param = "username";
      } else {
        param = "email";
      }
      return res.status(400).json({ error: `${param} is already used` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      name,
    });
  } catch (error) {
    console.log("Error in getAuthUser: \n ", error, "\n");
    res.status(500).json({
      error: "Something went wrong getting auth user",
    });
  }
}
export async function login(req = request, res = response) {
  try {
  } catch (error) {
    console.log("Error in getAuthUser: \n ", error, "\n");
    res.status(500).json({
      error: "Something went wrong getting auth user",
    });
  }
}
export async function getAuthUser(req = request, res = response) {
  try {
  } catch (error) {
    console.log("Error in getAuthUser: \n ", error, "\n");
    res.status(500).json({
      error: "Something went wrong getting auth user",
    });
  }
}
