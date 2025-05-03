import Header from "./components/Header";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <Header />
      <UploadForm />
      <PostCard
        caption="This is a sample aesthetic post ✨"
        image="https://source.unsplash.com/random/300x200"
      />
    </div>
  );
}

export default App;
