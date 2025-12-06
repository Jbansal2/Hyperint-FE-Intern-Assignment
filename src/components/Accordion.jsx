import React, { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-t pt-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left"
      >
        <span className="font-medium text-lg">{title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && <div className="mt-3 text-sm">{children}</div>}
    </div>
  );
}
