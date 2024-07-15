const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// dotenv config
dotenv.config();

// MongoDB Connection
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// Declaring the Port
const port = process.env.PORT || 8080;

// Listen to the Port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${port}`.bgGreen
      .white
  );
});
