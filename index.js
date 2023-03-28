import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5001;
const DB_URL =
  "mongodb+srv://skydark912:skydark912@cluster0.lp4gery.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("server started on port... " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
