import React, { useState } from "react";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";

export default function Product() {
    const images = [
        "/assets/img1.jpg",
        "/assets/img2.jpg",
        "/assets/img3.jpg",
        "/assets/img4.jpg",
    ];

    const [mainIndex, setMainIndex] = useState(0);

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">

            <ProductGallery
                images={images}
                mainIndex={mainIndex}
                setMainIndex={setMainIndex}
            />

            <ProductInfo />

        </div>
    );
}
