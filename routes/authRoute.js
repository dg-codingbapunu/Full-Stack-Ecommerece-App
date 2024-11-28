import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// routing
// REGISTER || METHOD POST

router.post("/register", registerController);

// LOGIN || METHOD POST

router.post("/login", loginController);

// Forgot password

router.post("/forgot-password", forgotPasswordController);

// test
router.get("/test", requireSignIn, isAdmin, testController);

// protected user route auth

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Upade Profile

router.put("/profile", requireSignIn, updateProfileController);

// Orders routes

router.get("/orders", requireSignIn, getOrdersController);

//  All Orders routes

router.get("/all-orders", requireSignIn, getAllOrdersController);

//  order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
