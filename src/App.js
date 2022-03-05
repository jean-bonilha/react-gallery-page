import Gallery from "./Gallery";
import images from "./data/images.json"

function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <Gallery images={images} />
    </div>
  );
}

export default App;
