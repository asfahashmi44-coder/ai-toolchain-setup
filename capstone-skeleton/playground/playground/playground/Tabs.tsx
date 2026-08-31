import React, { useState, useRef, KeyboardEvent } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.id || "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % items.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + items.length) % items.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = items.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setActiveTab(items[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Sample Tabs" style={{ display: "flex", gap: "8px" }}>
        {items.map((tab, idx) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[idx] = el)}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {items.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          tabIndex={0}
          style={{ paddingTop: "16px" }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
