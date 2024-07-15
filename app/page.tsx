"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";
import Image from "next/image";
import a from "./img/1.png";
import b from "./img/2.png";
import c from "./img/3.png";
import d from "./img/4.png";
import e from "./img/5.png";
import f from "./img/6.png";
import g from "./img/7.png";
import h from "./img/8.png";
import i from "./img/9.png";
import j from "./img/10.png";
import k from "./img/11.png";
import l from "./img/12.png";

const starSignsData = [
  { name: "Aries", image: a },
  { name: "Taurus", image: b },
  { name: "Gemini", image: c },
  { name: "Cancer", image: d },
  { name: "Leo", image: e },
  { name: "Virgo", image: f },
  { name: "Libra", image: g },
  { name: "Scorpio", image: h },
  { name: "Sagittarius", image: i },
  { name: "Capricorn", image: j },
  { name: "Aquarius", image: k },
  { name: "Pisces", image: l },
];

export default function Home() {
  useEffect(() => {
    localStorage.clear();
    console.log("Local storage has been cleared.");
  }, []);

  const router = useRouter();

  const starSigns = (sign) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("star-sign", sign);
    }
    router.push("/date");
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen py-20 px-5"
      id="main"
    >
      {/* Top-Section */}
      <div id="headline">
        <h1 className="text-4xl font-bold">
          Discover The Secret Behind Your Star Sign & Find Your True Destiny
        </h1>
        <p id="sub-h1">...While Making Everything Effortless And Harmonizing</p>
        <p id="sub-h2">First, What Is Your Star Sign?</p>
      </div>

      {/* Select-Section */}
      <div id="choice" className="items-center justify-center">
        {[0, 1, 2].map((rowIndex) => (
          <div
            key={rowIndex}
            className="row flex justify-center items-center gap-4"
          >
            {starSignsData
              .slice(rowIndex * 4, (rowIndex + 1) * 4)
              .map((sign) => (
                <div
                  key={sign.name}
                  className="col relative"
                  onClick={() => starSigns(sign.name)}
                >
                  <Image
                    src={sign.image}
                    alt={sign.name}
                    fill
                    style={{ borderRadius: "7px" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <p
                    className="absolute left-0 right-0 text-black"
                    style={{
                      marginBottom: "-21px",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {sign.name}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
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
