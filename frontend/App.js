import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const generateVideo = async () => {
    if (!image) {
      alert("Please upload an image");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", "cinematic motion");

    try {
      const res = await fetch("http://localhost:5000/generate-video", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setVideo(data.videoUrl);
    } catch (err) {
      alert("Error generating video");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Mazi Uche AI Cinematic App 🎬</h1>

      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <br /><br />

      <button onClick={generateVideo}>
        Generate Video
      </button>

      {loading && <p>Generating your cinematic video... 🎥</p>}

      <br /><br />

      {video && (
        <video src={video} controls width="300" />
      )}
    </div>
  );
}
