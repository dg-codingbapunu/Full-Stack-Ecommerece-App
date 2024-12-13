import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

// database congig

connectDB();

// es module

// rest object---

const app = express();

// midlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//  routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//  rest --- api

app.get("/", (req, res) => {
  res.send("hello welcome to my app");
});

// rest api

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {});
