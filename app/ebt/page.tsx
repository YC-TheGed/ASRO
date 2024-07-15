"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function Page() {
  const router = useRouter();
  const [time, setTime] = useState({ hour: "", minute: "", ampm: "" });

  const handleChange = (e) =>
    setTime({ ...time, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "selected-time",
      `${time.hour}:${time.minute}:${time.ampm}`
    );
    router.push(`/location`);
  };

  return (
    <div className="main-container">
      {/* Headline-Section */}
      <div id="headline">
        <h1>Select Your Birth Time</h1>
      </div>
      <div id="sub-head">
        <p>
          It doesn't have to be extremely accurate if you cannot remember it
          accurately, but the closer to the exact time, the better. Because it
          will help us to make your reading more accurate!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label id="title" htmlFor="hour">
              Hour:
            </label>
            <select id="hour" name="hour" onChange={handleChange} required>
              <option value="">Select</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <label id="title" htmlFor="minute">
              Minute:
            </label>
            <select id="minute" name="minute" onChange={handleChange} required>
              <option value="">Select</option>
              {[...Array(60)].map((_, i) => (
                <option key={i} value={i}>
                  {i < 10 ? `0${i}` : i}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <label id="title" htmlFor="ampm">
              Period:
            </label>
            <select id="ampm" name="ampm" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
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
