import { useState } from "react";

const UploadForm = () => {
  const [caption, setCaption] = useState("");

  return (
    <form className="p-4 space-y-2">
      <input
        type="text"
        placeholder="Enter caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
