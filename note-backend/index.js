const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
const allowedOrigins = [
  "https://noteapp-4-wocu.onrender.com", // primary frontend URL
  "https://noteapp-5-t4tm.onrender.com", // second frontend URL
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // mobile apps, curl etc
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
;


// API routes
app.use("/api/users", require("./routers/users"));

app.get("/api/test", (req, res) => {
  res.send("Backend working");
});

// ✅ CORRECT frontend path
const frontendPath = path.join(__dirname, "../notes-app/dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// port
const PORT = process.env.PORT || 8120;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
