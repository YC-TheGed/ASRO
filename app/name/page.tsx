"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loading.css";
import "./style.css";

export default function Name() {
  const router = useRouter();
  const [name, setName] = useState({ first: "", last: "" });
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [message, setMessage] = useState("Analyzing...");

  const messages = [
    "Analyzing...",
    "Interpreting results...",
    "Your astrology reading is almost ready...",
    "Finalizing details...",
    "Your astrology reading has been answered",
  ];

  const handleChange = (e) =>
    setName((prevName) => ({ ...prevName, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("first-name", name.first);
    localStorage.setItem("last-name", name.last);
    setLoading(true);
    router.prefetch("/answer");
  };

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress = oldProgress + 1;
          if (newProgress >= 100) {
            clearInterval(timer);
            setIsComplete(true);
            setFadeIn(true);
            return 100;
          }
          const messageIndex = Math.floor(
            (newProgress / 100) * messages.length
          );
          setMessage(messages[messageIndex]);
          return newProgress;
        });
      }, 50); // Set a reasonable interval duration
    }

    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  useEffect(() => {
    if (isComplete) {
      console.log("Loading complete");
    }
  }, [isComplete]);

  const handleClick = () => {
    router.push(`/answer`);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="name-container">
        {/* Headline-Section */}
        <div id="headline">
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "700",
              letterSpacing: "0.5px",
              marginBottom: "50px",
              marginTop: "25px",
            }}
          >
            What Is Your Name?
          </h1>
        </div>
        {/* Input-Section */}
        {!loading ? (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-group">
                <label id="title">First Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your First Name Here"
                    name="first"
                    value={name.first}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label id="title">Last Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name Here"
                    name="last"
                    value={name.last}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button
                type="submit"
                id="continue-button"
                style={{
                  marginTop: "50px",
                  borderRadius: "4px",
                  height: "58px",
                  fontSize: "24px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                <div>Continue &gt;&gt;</div>
              </button>
            </div>
          </form>
        ) : (
          <div className="loading" style={{ display: "flex" }}>
            <div
              className="mt-2 text-black"
              style={{
                marginBottom: "20px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {message}
            </div>
            <div
              className="progress"
              style={{ width: "550px", height: "27px", marginBottom: "30px" }}
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="mt-2 text-white"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "15px",
                    marginBottom: "8px",
                  }}
                >
                  {progress}%
                </div>
              </div>
            </div>

            {isComplete && (
              <button
                className={`btn btn-primary border-0 mt-3 ${
                  fadeIn ? "fade-in" : ""
                }`}
                style={{
                  width: "480px",
                  marginTop: "30px",
                  height: "50px",
                  backgroundColor: "#fea41c",
                  color: "black",
                  boxShadow: "5px 5px 10px rgb(139, 138, 138)",
                }}
                id="final-button"
                onClick={handleClick}
              >
                <span style={{ fontSize: "20px", fontWeight: "800" }}>
                  Click Here To Get Your Reading Now &gt;&gt;
                </span>
              </button>
            )}
          </div>
        )}
        <footer>
          <p dir="ltr">
            <span>
              Copyright 2024 © Divine Astrology Reading - All Rights Reserved
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}
