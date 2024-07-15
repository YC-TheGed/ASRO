"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default function YearPage() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [decadeStart, setDecadeStart] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const decade = localStorage.getItem("selected-decade");
    if (decade) {
      setDecadeStart(parseInt(decade));
    } else {
      // Handle the case where no decade was selected
      router.push("/decade");
    }
  }, [router]);

  useEffect(() => {
    if (selectedYear) {
      localStorage.setItem("selected-year", selectedYear.toString());
      router.push("/birth-time"); // Replace with your next page route
    }
  }, [selectedYear, router]);

  if (!decadeStart) return <div>Loading...</div>;

  const years = [];
  for (let year = decadeStart; year < decadeStart + 10; year++) {
    years.push(year);
  }

  return (
    <div className="year-container">
      {/* Headline-Section */}
      <div id="headline">
        <h1>Select Your Birth Year</h1>
      </div>
      <div id="year">
        <div className="year-grid">
          {years.map((year) => (
            <button
              key={year}
              className={`year-button ${
                selectedYear === year ? "selected" : ""
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
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
