"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function location() {
  const router = useRouter();
  const [location, setLocation] = useState({ city: "", country: "" });

  const handleChange = (e) =>
    setLocation({ ...location, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "selected-location",
      `${location.city}, ${location.country}`
    );
    router.push(`/name`);
  };

  return (
    <div className="location-container">
      {/* Headline-Section */}
      <div id="headline">
        <h1>Where Were You Born?</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="top">
          <div id="tt">
            <label id="title">City:</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Born City Here"
              name="city"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="bot">
          <div id="tt">
            <label id="title">Country:</label>
          </div>
          <input
            type="text"
            placeholder="Enter Your Born Country Here"
            name="country"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">
            <div>Continue &gt;&gt;</div>
          </button>
        </div>
      </form>
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
