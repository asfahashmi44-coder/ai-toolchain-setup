import React, { useState } from "react";

interface DisclosureProps {
  summary: string;
  details: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({ summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "4px", padding: "8px" }}>
      <button
        aria-expanded={isOpen}
        aria-controls="disclosure-content"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ width: "100%", textAlign: "left", cursor: "pointer" }}
      >
        {summary} {isOpen ? "▲" : "▼"}
      </button>
      <div id="disclosure-content" hidden={!isOpen} style={{ marginTop: "8px" }}>
        {details}
      </div>
    </div>
  );
};
