import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Import required for ES module paths

dotenv.config();

// database config
connectDB();

// rest object---
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Include credentials (if needed)
  })
);

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest --- api
app.get("/", (req, res) => {
  res.send("hello welcome to my app");
});

// Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Derive the directory name

app.use(express.static(path.join(__dirname, "./client/ecom/dist")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/ecom/dist/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
