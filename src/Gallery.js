import Image from "./Image"

function Galley({ images }) {
  return (
    <div className="gallery">
      {images.map((img, i) => {
        return <Image image={img} key={i} />
      })}
    </div>
  );
}

export default Galley;
