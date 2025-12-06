import React, { useState } from "react";
import img1 from "../assets/image1.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image3.webp";
import img4 from "../assets/image4.webp";
import img5 from "../assets/image5.webp";
import img6 from "../assets/image6.webp";
import payment from "../assets/payment.jpg";
import sizes from "../assets/size.png";

const ProductDetail = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const [mainImg, setMainImg] = useState(images[0]);
  const [size, setSize] = useState("36");
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-1">
        <div className="flex md:flex-col gap-3 md:gap-2 overflow-x-auto md:overflow-visible px-1 md:px-0">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setMainImg(src)}
              className={`flex-shrink-0 md:flex-shrink-0 rounded transition ${
                mainImg === src ? "ring-2 ring-black" : ""
              }`}
              aria-label={`Select image ${i + 1}`}
              type="button"
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                className="w-20 h-24 md:w-24 md:h-28 object-cover rounded-sm shadow-sm"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-6 rounded relative flex items-start self-start cursor-zoom-in justify-center">
        <div className="w-full flex items-start justify-center p-0 md:p-2">
          <img
            src={mainImg}
            alt="main"
            className="max-w-full md:max-w-[95%] h-[400px] md:h-[700px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-5">
        <div className="space-y-5 md:sticky md:top-20">
          <h2 className="text-right text-lg font-semibold text-black">Flat 50% Off</h2>

          <h1 className="text-xl font-bold leading-tight">
            Lycra Cotton Stretchable | Plain Formal Trousers | Polo Fit | Office Wear
            For Men's | Charcoal Black
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">₹1,349</span>
            <span className="line-through text-gray-500">₹2,699</span>
            <span className="text-sm text-green-600">50% OFF</span>
          </div>

          <div>
            <p className="font-semibold">SIZE: {size}</p>
            <div className="flex gap-3 mt-2 flex-wrap">
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

          <div>
            <p className="font-semibold">COLOR: CHARCOAL BLACK</p>
            <div className="mt-2 px-4 py-2 border w-fit rounded">Charcoal Black</div>
          </div>
 
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

          <button className="w-full bg-black text-white py-3 rounded font-semibold text-lg">
            BUY NOW - COD
          </button>

          <details className="mt-6 cursor-pointer group border-t pt-4">
            <summary className="font-semibold text-lg flex items-center justify-between">
              Details
              <span className="transition-transform duration-300 group-open:rotate-180">⌃</span>
            </summary>

            <div className="mt-4 space-y-6">
              <img src={payment} alt="Payment Methods" className="w-full shadow rounded" />

              <div className="space-y-4">
                <details className="bg-white border border-gray-300 rounded-lg p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer">Key Features</summary>
                  <ul className="mt-3 text-gray-600 list-disc pl-5 space-y-1">
                    <li>Premium Lycra Cotton blend</li>
                    <li>Soft stretchable waistband</li>
                    <li>Tailored slim polo-fit cut</li>
                    <li>Perfect for office & formal wear</li>
                  </ul>
                </details>

                <details className="bg-white rounded-lg p-4 border border-gray-300">
                  <summary className="font-semibold text-gray-800 cursor-pointer">Size Chart</summary>
                  <div className="mt-3">
                    <img src={sizes} alt="Size Chart" className="w-full rounded" />
                  </div>
                </details>

                <details className="bg-white border border-gray-300 rounded-lg p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer">Shipping Policy</summary>
                  <p className="mt-3 text-gray-600">Orders are dispatched within 24–48 hours. Delivery within 3–7 working days.</p>
                </details>

                <details className="bg-white border border-gray-300 rounded-lg p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer">Return / Exchange Policy</summary>
                  <p className="mt-3 text-gray-600">7-day easy returns. Product must be unused & in original packaging.</p>
                </details>

                <details className="bg-white border border-gray-300 rounded-lg p-4">
                  <summary className="font-semibold text-gray-800 cursor-pointer">Vendor's Details</summary>
                  <p className="mt-3 text-gray-600">Sold by: TrendLuxe Clothing<br />Registered Address: New Delhi, India</p>
                </details>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
