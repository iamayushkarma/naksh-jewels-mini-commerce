import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import errorHandler from "./middleware/error.middleware.js";
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check controller
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy",
  });
});
app.get("/", (req, res) => {
  res.send("app running");
});

// Routing
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);

app.use(errorHandler);

export default app;
