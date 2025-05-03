const PostCard = ({ caption }) => {
  const image =
    "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*htH7ZFnN7EIaEC9Ny0esxA.png";

  return (
    <div className="bg-white p-4 border rounded shadow-md">
      <img
        src={image}
        alt="post"
        className="w-full h-60 object-cover rounded"
      />
      <p className="mt-4 text-gray-700 text-center text-lg">{caption}</p>
    </div>
  );
};

export default PostCard;
