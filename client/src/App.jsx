import Header from "./components/Header";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-md space-y-6">
        <Header />
        <UploadForm />
        <PostCard caption="This is a sample aesthetic post ✨" />
      </div>
    </div>
  );
}

export default App;
