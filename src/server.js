import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import HabitRoutes from "./routes/habits.js";
import BetRoutes from "./routes/bets.js";
import UserRoutes from "./routes/user.js"

import { env } from "./utils/env.js";

const app = express()
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/habit", HabitRoutes);
app.use("/api/bet", BetRoutes);
app.use("/api/user", UserRoutes);

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}
// Connect to MongoDB
mongoose
  .connect(env.MONGO_URL, options)
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
  