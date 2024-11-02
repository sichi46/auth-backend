import { User } from "../models/user.js";
import bycrypt from "bcryptjs";
import {
  generateVerificationCode,
  generateVerificationToken,
} from "../utils/generate-verfication-code.js";

class AuthController {
  async signup(req, res) {
    const { email, password, name } = req.body;
    try {
      if (!email || !password || !name) {
        throw new Error("All fields are required");
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationCode = generateVerificationToken();

      const user = new User({
        email,
        password: hashedPassword,
        name,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
  async login(req, res) {
    res.send("login Route");
  }
  async logout(req, res) {
    res.send("logout Route");
  }
}

export const authController = new AuthController();
