import React, { useState } from "react";

const ProductDetail = () => {
  const images = [
    "../assets/image1.webp",
    "../assets/image2.webp",
    "../assets/image3.webp",
    "../assets/image4.webp",
    "../assets/image5.webp",
    "../assets/image6.webp",
  ];

  const [mainImg, setMainImg] = useState(images[0]);
  const [size, setSize] = useState("36");
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-6">

      {/* LEFT THUMBNAILS */}
      <div className="flex md:flex-col gap-3 col-span-2">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            onClick={() => setMainImg(src)}
            className={`w-20 h-28 object-cover border rounded cursor-pointer ${
              mainImg === src ? "border-black" : "border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div className="col-span-6 border rounded relative bg-[#fdf6e9] flex items-center justify-center">
        <img src={mainImg} alt="" className="w-full h-[500px] object-contain" />
        <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded text-sm">
          ⭐ 500+ Units Sold
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="col-span-4 space-y-5">
        <h2 className="text-right text-lg font-semibold text-black">Flat 50% Off</h2>

        <h1 className="text-xl font-bold">
          Lycra Cotton Stretchable | Plain Formal Trousers | Polo Fit | Office
          Wear For Men's | Charcoal Black
        </h1>

        {/* PRICE */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">₹1,349</span>
          <span className="line-through text-gray-500">₹2,699</span>
          <span className="text-sm text-green-600">50% OFF</span>
        </div>

        {/* SIZE SELECTOR */}
        <div>
          <p className="font-semibold">SIZE: {size}</p>
          <div className="flex gap-3 mt-2">
            {["32", "34", "36", "38"].map((s) => (
              <button
                key={s}
                disabled={s === "32" || s === "38"}
                onClick={() => setSize(s)}
                className={`px-4 py-2 border rounded ${
                  size === s ? "bg-black text-white" : "bg-white"
                } ${
                  s === "32" || s === "38"
                    ? "line-through cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* COLOR */}
        <div>
          <p className="font-semibold">COLOR: CHARCOAL BLACK</p>
          <div className="mt-2 px-4 py-2 border w-fit rounded">
            Charcoal Black
          </div>
        </div>

        {/* QUANTITY */}
        <div>
          <p className="font-semibold">QUANTITY</p>
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="px-3 py-2 border rounded"
            >
              -
            </button>

            <span className="font-semibold">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-2 border rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* BUY NOW BUTTON */}
        <button className="w-full bg-black text-white py-3 rounded font-semibold text-lg">
          BUY NOW - COD
        </button>

        {/* DETAILS DROPDOWN */}
        <details className="mt-4 cursor-pointer">
          <summary className="font-semibold text-lg">Details</summary>
          <p className="mt-2 text-gray-600">
            High-quality Lycra Cotton trousers with premium stretch comfort and a
            clean polo-fit design suitable for office wear.
          </p>
        </details>
      </div>
    </div>
  );
};

export default ProductDetail;
