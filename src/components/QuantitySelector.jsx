import React from "react";

export default function QuantitySelector({ qty, setQty }) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">QUANTITY</h4>

      <div className="flex items-center gap-3 border rounded px-3 py-1 w-max">
        <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
        <span className="w-6 text-center">{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>
    </div>
  );
}
