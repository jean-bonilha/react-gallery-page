import "./Image.css"

function Image({ image }) {
  return (
    <div className="image">
      <img
        src={image.url}
        alt={image.title}
      />
    </div>
  );
}

export default Image;
