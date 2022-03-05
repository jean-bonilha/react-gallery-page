import "./Image.css"
import { ImageViewer } from "react-image-viewer-dv"

function Image({ image }) {
  return (
    <div className="image">
      <ImageViewer className="image-header">
        <img
          src={image.url}
          alt={image.title}
        />
      </ImageViewer>
    </div>
  );
}

export default Image;
