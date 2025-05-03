import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import PostCard from "./components/PostCard";
import ShuffleButton from "./components/ShuffleButton";
import { useState } from "react";

function App() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [showPost, setShowPost] = useState(false);

  const handleUpload = (newCaption, newImage) => {
    setCaption(newCaption);
    setImage(newImage);
    setShowPost(true);
  };

  const handleShuffle = () => {
    const sampleImages = [
      "https://source.unsplash.com/random/300x200",
      "https://picsum.photos/300/200",
      "https://placekitten.com/300/200",
    ];
    const random = Math.floor(Math.random() * sampleImages.length);
    setImage(sampleImages[random]);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Header />
      <UploadForm onUpload={handleUpload} />
      {showPost && <PostCard caption={caption} image={image} />}
      {showPost && <ShuffleButton onShuffle={handleShuffle} />}
    </div>
  );
}

export default App;
