import express from "express";
import {
  brainTreePaymentController,
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  similarProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

// Filter Products

router.post("/product-filters", productFiltersController);

// Product count

router.get("/product-count", productCountController);

// product per page

router.get("/product-list/:page", productListController);

// Search Routes

router.get("/search/:keyword", searchProductController);

// similar products routes

router.get("/related-product/:pid/:cid", realtedProductController);

// Category List product

router.get("/product-category/:slug", productCategoryController);

// Payment Routes
// token

router.get("/braintree/token", braintreeTokenController);

// Payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
