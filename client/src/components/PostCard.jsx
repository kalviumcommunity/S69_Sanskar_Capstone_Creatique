const PostCard = ({ caption, image }) => {
    return (
      <div className="p-4 border rounded shadow">
        <img src={image} alt="post" className="w-full h-60 object-cover" />
        <p className="mt-2">{caption}</p>
      </div>
    );
  };
  export default PostCard;
  