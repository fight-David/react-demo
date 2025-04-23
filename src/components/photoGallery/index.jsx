import React, { useState } from "react";
import "./index.css";

// 照片画廊组件
const PhotoGallery = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-container">
      <h2>照片画廊</h2>

      {/* 照片网格 */}
      <div className="photo-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="photo-item"
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.thumbnail} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>

      {/* 大图查看模态框 */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-container">
            <img src={selectedImg.fullSize} alt={selectedImg.title} />
            <h3>{selectedImg.title}</h3>
            <button onClick={() => setSelectedImg(null)}>关闭</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
