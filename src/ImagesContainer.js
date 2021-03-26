import { useState } from "react";

export const ImagesContainer = ({ imagesData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentDetailImage, setCurrentDetailImage] = useState({});
  const handleShowDetails = (image) => {
    setShowDetails(true);
    setCurrentDetailImage(image);
  };
  return (
    <div>
      {showDetails && (
        <div onClick={() => setShowDetails(false)}>
          {currentDetailImage && (
            <div>
              id: {currentDetailImage.id}
              <img src={currentDetailImage.images.original.url} />
            </div>
          )}
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {imagesData &&
          imagesData.map((image) => {
            const downsizeUrl = image.images.downsized.url;

            return (
              <div>
                <img
                  style={{ width: 100, height: 100 }}
                  src={downsizeUrl}
                  onClick={() => handleShowDetails(image)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
