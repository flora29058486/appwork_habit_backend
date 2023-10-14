import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import HabitRoutes from "./routes/habits.js";
import BetRoutes from "./routes/bets.js";
import UserRoutes from "./routes/user.js"

import { env } from "./utils/env.js";

const app = express()
app.use(bodyParser.json());
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"], // 指定包含路由定义的文件路径
};

const swaggerSpec = swaggerJSDoc(options);
// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/habit", HabitRoutes);
app.use("/api/bet", BetRoutes);
app.use("/api/user", UserRoutes);

// Connect to MongoDB
const mongooseOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

mongoose
  .connect(env.MONGO_URL, mongooseOptions)
  .then(() => {
    app.listen(env.PORT, () =>
      console.log(`Server running on port http://localhost:${env.PORT}`),
    );
    // If the connection is successful, we will see this message in the console.
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    // Catch any errors that occurred while starting the server
    console.log("Failed to connect to MongoDB");
    console.log(error.message);
  });
  