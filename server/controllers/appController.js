const UserModel = require('../model/User.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ENV = require('../config.js');
const otpGenerator = require('otp-generator');

async function verifyUser(req, res, next) {
  try {
    const { email } = req.method == 'GET' ? req.query : req.body;

    // check the user existence
    let exist = await UserModel.findOne({ email });
    if (!exist) return res.status(404).send({ error: "Can't find User!" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
}

const register = async (req, res) => {
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

async function login(req, res) {
  const { email, password } = req.body;

  try {
    UserModel.findOne({ email })
      .then(user => {
        bcrypt.compare(password, user.password)
          .then(passwordCheck => {
            if (!passwordCheck) return res.status(400).send({ error: "Password does not match" });

            // create jwt token
            const token = jwt.sign({
              userId: user._id,
              email: user.email
            }, 'secret', { expiresIn: "24h" });

            return res.status(200).send({
              msg: "Login Successful...!",
              email: user.email,
              token
            });
          })
          .catch(error => {
            return res.status(400).send({ error: "Password does not Match" });
          });
      })
      .catch(error => {
        return res.status(404).send({ error: "Email not Found" });
      });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

module.exports = {
  verifyUser,
  register,
  login
};
