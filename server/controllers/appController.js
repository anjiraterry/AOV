import UserModel from '../model/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../config.js'
import otpGenerator from 'otp-generator';



export const register = async (req, res) => {
    try {
      const { email, password, name, dob, radio, select } = req.body;
  
      // Check if user already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new UserModel({
        email,
        password: hashedPassword,
        name,
        dob,
        radio,
        select
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  };

