"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default function BirthTimePage() {
  const router = useRouter();

  useEffect(() => {
    // Force a reload of the CSS
    const links = document.getElementsByTagName("link");
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === "stylesheet") {
        const href = links[i].href.split("?")[0];
        const newHref = href + "?id=" + new Date().getMilliseconds();
        links[i].href = newHref;
      }
    }
  }, []);

  const yesSelected = () => {
    router.push("/ebt");
  };

  const noSelected = () => {
    router.push("/location");
  };

  return (
    <div className="birth-time-container">
      {/* Headline-Section */}
      <div id="headline">
        <h1>Do You Know Your Birth Time?</h1>
      </div>
      <div id="sub-head">
        <p>
          It can make your reading more accurate but it's totally optional if
          you don't remember your birth time! :)
        </p>
      </div>
      {/* Select-Section */}
      <div className="row gap-0">
        <div className="col">
          <button onClick={yesSelected}>
            <div>Yes</div>
          </button>
        </div>
        <div className="col">
          <button onClick={noSelected}>
            <div>No</div>
          </button>
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
