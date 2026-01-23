import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routers/authRoutes.js";
import connectDB from "./config/db.js";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🔥 CORS (single, correct)

app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = [
        "http://localhost:5173",
        process.env.FRONTEND_URL,
      ];

      // server-to-server, postman, render internal
      if (!origin) return callback(null, true);

      if (allowed.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked by CORS:", origin);
      return callback(null, true); // ⚠️ block mat karo, bas log karo
    },
    credentials: true,
  })
);



// routes
app.use("/auth", authRouter);

// static uploads
app.use("/uploads", express.static("uploads"));

// serve frontend build
const frontendPath = path.join(__dirname, "../notes-app/dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) =>
  res.sendFile(path.join(frontendPath, "index.html"))
);

// render port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running on " + PORT));
