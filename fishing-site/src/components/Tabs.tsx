"use client";
import { useState, ReactNode } from "react";

type Tab = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="border-b border-gray-200 mb-4 flex space-x-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`py-2 px-4 ${active === idx ? "border-b-2 border-blue-600" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
