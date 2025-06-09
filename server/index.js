require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server running"));

app.listen(5000, () => console.log("Server started on port 5000"));

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB connected"));

app.use("/api/auth", authRoutes);
