const express = require("express"); //Import the Express.js framework
const cors = require("cors"); // Import the CORS middleware
const morgan = require("morgan"); // Import the Morgan middleware for logging

const { BadRequestError, NotFoundError } = require("./utils/errors"); // Import custom error handlers


const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS middleware to handle cross-origin requests
app.use(morgan("dev")); // Use Morgan middleware with 'dev' format for request logging
app.use(express.json()); // Parse incoming requests with JSON payloads


app.get("/", async (req, res, next) => {

  res.json({ping : "pong"});

});


app.use((req, res, next) => {
  return next(new NotFoundError());
});


app.use((req, res, next) => {
  
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
      error: { message, status },
    });
  
});

//Mount the cars router at the '/api/cars'
// app.use("/api/cars", carsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});