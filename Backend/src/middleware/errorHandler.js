const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);
  
    // Set default values
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message || "Internal Server Error";
  
    // Mongoose Validation Error
    if (err.name === "ValidationError") {
      statusCode = 400;
      message = Object.values(err.errors).map((val) => val.message).join(", ");
    }
  
    // Duplicate Key Error (MongoDB)
    if (err.code === 11000) {
      statusCode = 400;
      message = "Duplicate field value entered";
    }
  
    // Cast Error (Invalid ObjectId)
    if (err.name === "CastError") {
      statusCode = 400;
      message = `Resource not found: Invalid ${err.path}`;
    }
  
    res.status(statusCode).json({ message });
  };
  
  export default errorHandler;
  