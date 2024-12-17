const mongoose = require("mongoose");
// const loadSampleData = require("./loadSampleData");
const MONGO_URL = process.env.MONGO_URL;

const connectDatabase = async () => {
  if (!MONGO_URL) {
    throw Error("Missing database url in the environment variable");
  }

  const connection = await mongoose.connect(MONGO_URL);

  // Insert sample data
  // await loadSampleData()

  // get the host of the connection
  const host = connection.connection.host;
  console.log(`MongoDB connected on: ${host}`);

};

module.exports = connectDatabase;
