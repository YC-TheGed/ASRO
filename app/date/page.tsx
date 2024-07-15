"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const starSignDates = {
  Aries: {
    start: { month: "March", day: 21 },
    end: { month: "April", day: 19 },
  },
  Taurus: {
    start: { month: "April", day: 20 },
    end: { month: "May", day: 20 },
  },
  Gemini: { start: { month: "May", day: 21 }, end: { month: "June", day: 20 } },
  Cancer: {
    start: { month: "June", day: 21 },
    end: { month: "July", day: 22 },
  },
  Leo: { start: { month: "July", day: 23 }, end: { month: "August", day: 22 } },
  Virgo: {
    start: { month: "August", day: 23 },
    end: { month: "September", day: 22 },
  },
  Libra: {
    start: { month: "September", day: 23 },
    end: { month: "October", day: 22 },
  },
  Scorpio: {
    start: { month: "October", day: 23 },
    end: { month: "November", day: 21 },
  },
  Sagittarius: {
    start: { month: "November", day: 22 },
    end: { month: "December", day: 21 },
  },
  Capricorn: {
    start: { month: "December", day: 22 },
    end: { month: "January", day: 19 },
  },
  Aquarius: {
    start: { month: "January", day: 20 },
    end: { month: "February", day: 18 },
  },
  Pisces: {
    start: { month: "February", day: 19 },
    end: { month: "March", day: 20 },
  },
};

export default function SelectDateMonth() {
  const [starSign, setStarSign] = useState(null);
  const [dateRanges, setDateRanges] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedStarSign = localStorage.getItem("star-sign");
    if (storedStarSign) {
      setStarSign(storedStarSign);
      setDateRanges(getDateRangesForSign(storedStarSign));
    }
  }, []);

  useEffect(() => {
    if (selectedDate && selectedMonth) {
      localStorage.setItem("selected-date", selectedDate.toString());
      localStorage.setItem("selected-month", selectedMonth);
      console.log("Attempting to navigate to /decade");
      router.push("/decade");
    }
  }, [selectedDate, selectedMonth, router]);

  const getDateRangesForSign = (sign) => {
    const { start, end } = starSignDates[sign];
    let ranges = [];

    if (start.month === end.month) {
      ranges.push({
        month: start.month,
        start: start.day,
        end: end.day,
      });
    } else {
      ranges.push({
        month: start.month,
        start: start.day,
        end: 31,
      });
      ranges.push({
        month: end.month,
        start: 1,
        end: end.day,
      });
    }

    return ranges;
  };

  const handleDateSelect = (month, date) => {
    setSelectedMonth(month);
    setSelectedDate(date);
  };

  return (
    <main className="main-container">
      {/* Headline-Section */}
      <div id="headline">
        <h1>Select Your Birth Date</h1>
      </div>
      {/* Select-Section */}
      {dateRanges.map((range, index) => (
        <div key={index} className="month-section">
          <div id="month">
            <h3>{range.month}</h3>
          </div>
          <div className="date-grid">
            {[...Array(range.end - range.start + 1)].map((_, i) => {
              const date = range.start + i;
              return (
                <div
                  key={date}
                  className={`col ${
                    selectedDate === date && selectedMonth === range.month
                      ? "selected"
                      : ""
                  }`}
                  id="date-grid-col"
                  onClick={() => handleDateSelect(range.month, date)}
                >
                  <p>{date.toString().padStart(2, "0")}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <footer>
        <p dir="ltr">
          <span>
            Copyright 2024 © Divine Astrology Reading - All Rights Reserved
          </span>
        </p>
      </footer>
    </main>
  );
}
