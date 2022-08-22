import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// yo dherai dirty dakhera yesko code haru rotues ma dakheko xa (base url tei yeta rakheko xa baki tei routes ma xa)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// yo middleware ho jasle id wa link melena vani error falxa -> middleware folder vitra xa code
app.use(notFound);
app.use(errorHandler);

const Port = process.env.PORT || 5000;

app.listen(Port, () =>
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${Port}`.yellow.bold
  )
);
