import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// main route
app.post("/generate-video", upload.single("image"), (req, res) => {
  const videoUrl =
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";

  res.json({ success: true, videoUrl });
});

// IMPORTANT: use dynamic port for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
