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

app.get("/", (req, res) => {
  res.send("app running");
});

// Routing
app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.use(errorHandler);

export default app;
