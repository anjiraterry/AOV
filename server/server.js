
const express = require("express");
const router = require('./router/route.js');
const morgan = require('morgan');
const cors = require("cors");
const connect = require('./database/conn.js');
const passportSetup = require("./passport");
const cookieSession = require('cookie-session');
const passport = require("passport");
const authRoute = require("./router/auth");
const app = express();
const port = 8000;


app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.status(201).json("Home GET Request");
});

app.use("/auth", authRoute);
app.use('/api', router);


connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Cannot connect to the server');
  }
}).catch(error => {
  console.log("Invalid database connection...!");
});


