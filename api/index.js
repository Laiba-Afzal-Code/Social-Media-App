// import
const connectDB = require("./db");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

connectDB();
const app = express();
const port = 8800;

app.use("/images", express.static(path.join(__dirname, "public/images")));

// middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(file, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/upload"),
  upload.single("file"),
   (req, res) => {
    try {
      return res.status(200).json("File Uploded Successfully");
    } catch (error) {
      console.log(error);
    }
  };

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
