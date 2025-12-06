import React, { useState } from "react";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import Accordion from "./Accordion";

export default function ProductInfo() {
  const [size, setSize] = useState("36");
  const [qty, setQty] = useState(1);

  return (
    <div className="w-[350px] space-y-6">

      <h1 className="text-2xl font-bold">
        Lycra Cotton Stretchable | Formal Trousers | Charcoal Black
      </h1>

      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-semibold">₹1,349</span>
        <span className="line-through text-gray-400">₹2,699</span>
        <span className="text-green-600 text-sm">50% OFF</span>
      </div>

      <SizeSelector size={size} setSize={setSize} />

      <QuantitySelector qty={qty} setQty={setQty} />

      <button className="w-full bg-black text-white py-3 rounded-sm font-semibold">
        BUY NOW - COD
      </button>

      <Accordion title="Details">
        <p>Fabric: Lycra Cotton</p>
        <p>Fit: Formal | Stretchable</p>
        <p>Care: Machine wash</p>
      </Accordion>

    </div>
  );
}
