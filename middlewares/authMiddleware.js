import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes token-based middleware
export const requireSignIn = async (req, res, next) => {
  // Check if Authorization header is present
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authorization token is required",
    });
  }

  try {
    // Verify token
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// Admin role check middleware
export const isAdmin = async (req, res, next) => {
  // Ensure the user is authenticated before checking role
  if (!req.user || !req.user._id) {
    return res.status(401).json({
      success: false,
      message: "User authentication required",
    });
  }

  try {
    // Find the user by ID
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the user has admin privileges (role === 1)
    if (user.role !== 1) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized Access - Admin privileges required",
      });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error while checking admin role",
    });
  }
};
