const UserModel = require('../model/User.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ENV = require('../config.js');
const axios = require('axios')
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
            }, ENV.JWT_SECRET  , { expiresIn: "24h" });

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



const getDashboard = async (req, res) => {
  try {
    // Extract the email from the decoded token
    const email = req.user.email;

    // Query the UserModel to find the user by email
    const user = await UserModel.findOne({ email });

    // If no user found, return a 404 response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Customize the userData object as per your dashboard requirements
    const userData = {
      email: user.email,
      name: user.name,
      dob: user.dob,
      // Add more fields as needed
    };

    // Return the userData in the response
    res.status(200).json(userData);
  } catch (error) {
    // Handle any errors that occur during data retrieval
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error retrieving user data', error });
  }
};




 const kyc = async (req, res) => {
  const { email, ...updateData } = req.body;

  try {
    // Save KYC information to the database
    const updatedUser = await UserModel.findOneAndUpdate({ email }, updateData, { new: true });
   
    console.log('Received email:', email);
    console.log('Received update data:', updateData);
    console.log (ENV.FLUTTERWAVE_SECRET_KEY)

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    let formattedMobileNumber = updatedUser.number.replace(/\D/g, '');
    if (formattedMobileNumber.startsWith('234')) {
      formattedMobileNumber = '0' + formattedMobileNumber.slice(3);
    }
    // User information for Flutterwave API
    const userInfo = {
      account_name: `${updatedUser.firstName} ${updatedUser.lastName}`,
      email: updatedUser.email,
      mobilenumber: formattedMobileNumber,
      country: updatedUser.country,
    };

    console.log (userInfo)

    // Make a POST request to the Flutterwave API to create a payout subaccount
   
    const response = await axios.post(
      'https://api.flutterwave.com/v3/payout-subaccounts',
      userInfo,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ENV.FLUTTERWAVE_SECRET_KEY}`,
        },
      }
    ); 

    // Handle the response from Flutterwave
    if (response.status === 200) {
      res.status(200).send('KYC information saved and payout subaccount created successfully!');
    } else {
      res.status(response.status).send('KYC information saved but failed to create payout subaccount.');
    } 
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while processing KYC information.');
  }
};

module.exports = {
  verifyUser,
  getDashboard,
  register,
  login,
  kyc, 
};
