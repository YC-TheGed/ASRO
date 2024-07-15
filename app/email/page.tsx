"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function email() {
  const router = useRouter();
  const [email, setEmail] = useState({ email: "" });
  const xEmail = document.getElementById("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", xEmail);
    router.push(`/answer`);
  };

  return (
    <div className="email-container">
      <h1>What is your email?</h1>
      <p></p>
      <form>
        <div className="row">
          <div className="col">
            <label id="title">Email:</label>
            <div>
              <input
                type="email"
                placeholder="Enter Your Email Here"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button type="submit" onClick={handleSubmit}>
            <div>Continue &gt;&gt;</div>
          </button>
        </div>
      </form>
    </div>
  );
}
