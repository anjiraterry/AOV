const mongoose = require('mongoose');

async function connect() {
  mongoose.set('strictQuery', true);
  
  try {
    const db = await mongoose.connect("mongodb+srv://anjiraterry:terry2002@aovcluster.ge4er7q.mongodb.net/users", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas Database Connected');
    return db;
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connect;