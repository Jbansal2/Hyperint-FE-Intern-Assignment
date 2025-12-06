import React, { useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import img1 from "../assets/image1.webp";
import img1Alt from "../assets/image3.webp";
import img2 from "../assets/image2.webp";
import img2Alt from "../assets/image4.webp"; 

function YouMayAlsoLike() {
  const [hoveredId, setHoveredId] = useState(null);
  const products = [
    {
      id: 2,
      title: "Slim Fit Formal Trousers | Navy Blue",
      img: img1,
      imgHover: img1Alt,
      rating: 4.6,
      reviews: 1200,
      price: 1199,
      oldPrice: 2399,
      badge: null,
      sold: "200+ Units Sold",
    },
    {
      id: 3,
      title: "Classic Chinos | Beige",
      img: img2,
      imgHover: img2Alt,
      rating: 4.4,
      reviews: 800,
      price: 999,
      oldPrice: 1999,
      badge: null,
      sold: "300+ Units Sold",
    },
  ];

  const scroller = useRef(null);

  const scroll = (dir = "right") => {
    if (!scroller.current) return;
    const container = scroller.current;
    const cardWidth = container.firstChild
      ? container.firstChild.getBoundingClientRect().width + 16
      : 300; 
    const scrollAmount = dir === "right" ? cardWidth * 1.5 : -cardWidth * 1.5;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const Stars = ({ value }) => {
    const out = [];
    const full = Math.floor(value || 0);
    for (let i = 1; i <= 5; i++) {
      if (i <= full) out.push(<AiFillStar key={i} className="text-yellow-400" />);
      else out.push(<AiOutlineStar key={i} className="text-yellow-400 opacity-60" />);
    }
    return <div className="inline-flex items-center gap-1">{out}</div>;
  };

  return (
    <section className="py-8 px-6 max-w-7xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6">You May Also Like</h3>

      <div className="relative">
        {/* Left / Right controls */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 bg-white rounded-full  border hover:scale-105 transition"
        >
          <FiChevronLeft />
        </button>

        <div
          ref={scroller}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2  px-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((p) => {
            const showingImg = hoveredId === p.id && p.imgHover ? p.imgHover : p.img;
            return (
              <article
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="min-w-[220px] md:min-w-[260px] lg:min-w-[300px] cursor-pointer bg-white rounded-md border border-gray-100 relative"
              >
                {p.badge && (
                  <div className="absolute left-3 top-3 bg-yellow-700 text-white text-xs font-semibold px-2 py-1 rounded-sm z-10">
                    {p.badge}
                  </div>
                )}

                <button
                  className="absolute right-3 top-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border"
                  aria-label="Add to wishlist"
                  title="Add to wishlist"
                >
                  <FiHeart />
                </button>

                <div className="w-full h-[320px] md:h-[360px] lg:h-[420px] flex items-center justify-center bg-gray-50 rounded-t-md overflow-hidden">
                  <img
                    src={showingImg}
                    alt={p.title}
                    className="max-h-full object-contain transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-700 line-clamp-2">{p.title}</div>

                  <div className="mt-3 flex items-center gap-3">
                    <Stars value={p.rating} />
                    <span className="text-sm text-gray-500">({p.reviews.toLocaleString()})</span>
                  </div>

                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <div className="text-lg font-semibold">₹{p.price.toLocaleString()}</div>
                      {p.oldPrice && (
                        <div className="text-sm text-gray-400 line-through">₹{p.oldPrice.toLocaleString()}</div>
                      )}
                    </div>

                    <div className="text-xs text-gray-500">{p.sold}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 bg-white rounded-full shadow border hover:scale-105 transition"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default YouMayAlsoLike;
