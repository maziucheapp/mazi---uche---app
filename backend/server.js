import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/generate-video", upload.single("image"), async (req, res) => {
  const description = req.body.description;

  const videoUrl =
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";

  res.json({
    success: true,
    videoUrl,
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
