import React from "react";

export default function ProductThumbnails({ images, mainIndex, setMainIndex }) {
  return (
    <div className="flex flex-col gap-4 w-20">
      {images.map((src, idx) => (
        <button
          key={idx}
          onClick={() => setMainIndex(idx)}
          className={`border p-1 rounded-sm ${
            mainIndex === idx ? "ring-2 ring-black" : ""
          }`}
        >
          <img 
            src={src} 
            alt={`thumb-${idx}`} 
            className="w-16 h-20 object-cover" 
          />
        </button>
      ))}
    </div>
  );
}
