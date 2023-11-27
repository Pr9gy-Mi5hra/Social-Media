const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
mongoose.connect(
  `mongodb+srv://pragyamishra0803:${process.env.MONGODB_PASSWORD}@cluster0.0kbc7zf.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("DB connected successfully");
}).catch((err) => {
  console.error(err);
});
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});