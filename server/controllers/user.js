//hashes password for user security
import bcrypt from "bcryptjs";

//safe way to store user in browser for some period of time
//keeps user logged in
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exisitingUser = await User.findOne({ email });

    if (!exisitingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      exisitingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { email: exisitingUser.email, id: exisitingUser._id },
      //test is placeholder for secret string that would normally be placed in env file
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: exisitingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const exisitingUser = await User.findOne({ email });
    if (exisitingUser)
      return res.status(400).json({ message: "User already exisits." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
