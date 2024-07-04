const express = require("express");
const dotenv = require("dotenv"); // Corrected dotenv import
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection"); // Importing connectDb

// Load environment variables from .env file
dotenv.config();

// Calling our connectDB function
connectDb();

const app = express();
const port = process.env.PORT || 5000;

// Applying an in-built middleware 
// This one is going to provide a parser 
app.use(express.json());

// Everytime we want to use a middleware we need to do app.use()
app.use(errorHandler); // Now the errorHandler middleware is auto imported

// Here we can define our contact route
// Usually this app.use thingy is known as a middleware
// We define the path of our route in the require thingy
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
