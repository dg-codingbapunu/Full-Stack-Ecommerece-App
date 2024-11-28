import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// database congig

connectDB();

// es module
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// rest object---

const app = express();

// midlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    // Include credentials (if needed)
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "/client/ecom/dist")));

//  routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//  rest --- api

app.get("/", (req, res) => {
  res.send("hello welcome to my app");
});

// rest api

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/ecom/dist/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {});
