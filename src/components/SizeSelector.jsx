import React from "react";

export default function SizeSelector({ size, setSize }) {
  const sizes = ["32", "34", "36", "38"];

  return (
    <div>
      <h4 className="text-sm font-medium mb-2">SIZE</h4>

      <div className="flex gap-3">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`w-12 h-12 border rounded-sm flex items-center justify-center ${
              size === s ? "border-black bg-gray-100" : ""
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
