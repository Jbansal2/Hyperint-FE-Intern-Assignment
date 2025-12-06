import React from "react";
import ProductThumbnails from "./ProductThumbnails";

export default function ProductGallery({ images, mainIndex, setMainIndex }) {
  return (
    <div className="flex gap-6">
      <ProductThumbnails 
        images={images} 
        mainIndex={mainIndex} 
        setMainIndex={setMainIndex} 
      />

      <div className="border rounded-md overflow-hidden w-[500px] h-[600px] bg-gray-50">
        <img 
          src={images[mainIndex]} 
          className="w-full h-full object-contain" 
          alt="Product"
        />
      </div>
    </div>
  );
}
