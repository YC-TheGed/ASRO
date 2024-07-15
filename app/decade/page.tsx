"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default function DecadePage() {
  const [selectedDecade, setSelectedDecade] = useState(null);
  const router = useRouter();

  const decades = [];
  for (let year = 1900; year <= 2020; year += 10) {
    decades.push(year);
  }

  useEffect(() => {
    if (selectedDecade) {
      localStorage.setItem("selected-decade", selectedDecade.toString());
      console.log("Attempting to navigate to /year");
      router.push("/year"); // Replace with your next page route
    }
  }, [selectedDecade, router]);

  return (
    <div className="decade-container">
      {/* Headline-Section */}
      <div id="headline">
        <h1>Which Decade Were You Born In?</h1>
      </div>
      {/* Select-Section */}
      <div id="decade">
        <div className="decade-grid">
          {decades.map((decade) => (
            <button
              key={decade}
              className={`decade-button ${
                selectedDecade === decade ? "selected" : ""
              }`}
              onClick={() => setSelectedDecade(decade)}
            >
              {decade}s
            </button>
          ))}
        </div>
      </div>
      <footer>
        <p dir="ltr">
          <span>
            Copyright 2024 © Divine Astrology Reading - All Rights Reserved
          </span>
        </p>
      </footer>
    </div>
  );
}
