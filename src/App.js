import { useState, useEffect } from "react";
import "./App.css";
import { ImagesContainer } from "./ImagesContainer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [imagesData, setImageData] = useState([]);

  const API_URL =
    "http://api.giphy.com/v1/gifs/trending?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f";

  const SEARCH_URL =
    "http://api.giphy.com/v1/gifs/search?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f&q=";
  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setImageData(result.data);
      });
  };

  const handleSearch = () => {
    const searchUrl = `${SEARCH_URL}${searchText}`;
    fetch(searchUrl)
      .then((res) => res.json())
      .then((result) => {
        setImageData(result.data);
      });
  };

  return (
    <div className="App">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => handleSearch()}>Search</button>
      <ImagesContainer imagesData={imagesData} />
    </div>
  );
}

export default App;
