import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: [
        "https://food-del-beta-eight.vercel.app",   // frontend live URL
        "https://food-del-ahj5.vercel.app"          // admin actual URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));



// DB connection
connectDB();

// API routes
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
