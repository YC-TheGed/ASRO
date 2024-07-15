"use client";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Head from "next/head";
import StarryNight from "./page copy";
import Image from "next/image";
import a from "./img/1.jpeg";
import b from "./img/2.jpeg";
import c from "./img/3.png";
import d from "./img/4.jpg";
import e from "./img/5.jpeg";
import f from "./img/6.jpeg";
import g from "./img/7.png";
import h from "./img/8.jpeg";

interface AstrologicalChartProps {
  firstName: string;
  starSign: string;
  year: string;
  month: string;
  date: string;
  city: string;
}

const AstrologicalChart: React.FC<AstrologicalChartProps> = ({
  firstName,
  starSign,
  year,
  month,
  date,
  city,
}) => {
  const signSymbols: { [key: string]: string } = {
    Aries: "\u2648",
    Taurus: "\u2649",
    Gemini: "\u264A",
    Cancer: "\u264B",
    Leo: "\u264C",
    Virgo: "\u264D",
    Libra: "\u264E",
    Scorpio: "\u264F",
    Sagittarius: "\u2650",
    Capricorn: "\u2651",
    Aquarius: "\u2652",
    Pisces: "\u2653",
  };

  const planetSymbols: { [key: string]: string } = {
    Sun: "☉",
    Moon: "☽",
    Mercury: "☿",
    Venus: "♀",
    Mars: "♂",
    Jupiter: "♃",
    Saturn: "♄",
  };

  const signs: string[] = Object.keys(signSymbols);
  const houses: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  const planets: string[] = Object.keys(planetSymbols);

  const angle: number = 360 / signs.length;

  // Function to generate non-overlapping planet positions
  const generatePlanetPositions = () => {
    const positions: { [key: string]: number } = {};
    const minDistance = 15; // Minimum distance between planets in degrees
    const centralCircleRadius = 60; // Slightly larger than the visual radius to ensure no overlap

    for (const planet of planets) {
      let position;
      let attempts = 0;
      do {
        position = Math.floor(Math.random() * 360);
        attempts++;
      } while (
        (Object.values(positions).some(
          (pos) =>
            Math.abs(pos - position) < minDistance ||
            Math.abs(pos - position) > 360 - minDistance
        ) ||
          position > 360 - centralCircleRadius ||
          position < centralCircleRadius) &&
        attempts < 100
      );
      positions[planet] = position;
    }

    return positions;
  };

  const planetPositions = generatePlanetPositions();

  const getCoordinatesOnCircle = (angle: number, radius: number) => {
    const radians = ((angle - 90) * Math.PI) / 180; // -90 to start at top
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius,
    };
  };

  // Function to draw lines between planets
  const drawPlanetConnections = () => {
    const connections = [];
    for (let i = 0; i < planets.length; i++) {
      for (let j = i + 1; j < planets.length; j++) {
        const planet1 = planets[i];
        const planet2 = planets[j];
        const pos1 = getCoordinatesOnCircle(planetPositions[planet1], 200);
        const pos2 = getCoordinatesOnCircle(planetPositions[planet2], 200);
        connections.push(
          <line
            key={`${planet1}-${planet2}`}
            x1={pos1.x}
            y1={pos1.y}
            x2={pos2.x}
            y2={pos2.y}
            stroke="gold"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        );
      }
    }
    return connections;
  };

  return (
    <div className="chart-background">
      <div className="astrological-chart">
        {/* <h2>{firstName}'s Astrological Chart</h2>
        <p>
          Born on: {month}/{date}/{year} in {city}
        </p>
        <p>Star Sign: {signSymbols[starSign]}</p> */}
        <svg width="600" height="600" viewBox="-300 -300 600 600">
          <defs>
            <clipPath id="centerClip">
              <circle cx="0" cy="0" r="50" />
            </clipPath>
          </defs>
          {/* Outer circle (new) */}
          <circle
            cx="0"
            cy="0"
            r="290"
            fill="none"
            stroke="#ecaa30"
            strokeWidth="2"
          />

          {/* Inner circle */}
          <circle
            cx="0"
            cy="0"
            r="250"
            fill="none"
            stroke="#ecaa30"
            strokeWidth="2"
          />

          {/* Zodiac signs and divisions */}
          {signs.map((sign, index) => {
            const rotation = index * angle - angle / 2; // Adjust rotation
            const { x, y } = getCoordinatesOnCircle(rotation, 280);
            return (
              <g key={sign}>
                {/* Division lines */}
                <line
                  x1={getCoordinatesOnCircle(rotation, 250).x}
                  y1={getCoordinatesOnCircle(rotation, 250).y}
                  x2={getCoordinatesOnCircle(rotation, 290).x}
                  y2={getCoordinatesOnCircle(rotation, 290).y}
                  stroke="#ecaa30"
                  strokeWidth="2"
                />
                {/* Sign symbols */}
                <text
                  x={getCoordinatesOnCircle(index * angle, 270).x}
                  y={getCoordinatesOnCircle(index * angle, 270).y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="24"
                  fontWeight="bold"
                  transform={`rotate(${index * angle}, ${
                    getCoordinatesOnCircle(index * angle, 270).x
                  }, ${getCoordinatesOnCircle(index * angle, 270).y})`}
                  className="symbol"
                  fill="white"
                >
                  {signSymbols[sign]}
                </text>
              </g>
            );
          })}

          {/* House divisions */}
          {houses.map((house, index) => {
            const rotation = index * 30 - 15; // Adjust rotation
            const { x: x1, y: y1 } = getCoordinatesOnCircle(rotation, 71); // Start just outside the central circle
            const { x: x2, y: y2 } = getCoordinatesOnCircle(rotation, 250);
            return (
              <line
                key={house}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="white"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Planet connections */}
          {drawPlanetConnections()}

          {/* Planets */}
          {planets.map((planet) => {
            const { x, y } = getCoordinatesOnCircle(
              planetPositions[planet],
              200
            );
            return (
              <g key={planet}>
                <circle cx={x} cy={y} r="5" fill="gold" />
                <text x={x + 10} y={y} fontSize="13" fill="gold">
                  {planet}
                </text>
              </g>
            );
          })}

          {/* Center circle - only border */}
          <circle
            cx="0"
            cy="0"
            r="70"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          {/* Star sign symbol in the center */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="46"
            fill="#ecaa30"
            fontWeight="bold"
            className="symbol"
          >
            {signSymbols[starSign]}
          </text>
        </svg>
      </div>
    </div>
  );
};

function getSimpleAscendant(hour) {
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  // This is a very simplified calculation
  // It assumes each sign rises for about 2 hours
  const index = Math.floor(hour / 2) % 12;
  return signs[index];
}

export default function Answer() {
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [starSign, setStarSign] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    try {
      const storedFirstName = localStorage.getItem("first-name");
      const storedStarSign = localStorage.getItem("star-sign");
      const storedYear = localStorage.getItem("selected-year");
      const storedMonth = localStorage.getItem("selected-month");
      const storedDate = localStorage.getItem("selected-date");
      const storedLocation = localStorage.getItem("selected-location");
      const city = storedLocation ? storedLocation.split(",")[0].trim() : "";

      if (storedFirstName) setFirstName(storedFirstName);
      if (storedStarSign) setStarSign(storedStarSign);
      if (storedYear) setYear(storedYear);
      if (storedMonth) setMonth(storedMonth);
      if (storedDate) setDate(storedDate);
      if (storedLocation) setLocation(storedLocation);
      if (city) setCity(city);

      const updateAscendant = () => {
        const now = new Date();
        const hours = now.getHours();
        const ascSign = getSimpleAscendant(hours);
        setAscendant(ascSign);
      };

      // Update initially
      updateAscendant();

      // Set up an interval to update every hour
      const intervalId = setInterval(updateAscendant, 3600000); // 3600000 ms = 1 hour

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  const handleClick = () => {
    window.location.href =
      "https://torchged.pay.clickbank.net/?cbitems=5&cbfid=56632";
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

      <div className="answer-container">
        {/* Headline-Section */}
        <div id="headline-section">
          <div id="headline-1">
            <h1>A Private Reading To {firstName}</h1>
          </div>
          <div id="headline-2">
            <h1>From The Divine Astrology Reading</h1>
          </div>
          <div id="headline-3">
            <h1>
              For The {starSign} Who Born on {month} {date}, {year}
            </h1>
          </div>
        </div>
        <StarryNight className="chart-background">
          {/* Letter-Section */}
          <div id="letter">
            <p dir="ltr">
              <span>Dear {firstName},</span>
            </p>
            <p dir="ltr">
              <span>
                <b>
                  <i>It is happening…</i>
                </b>
              </span>
            </p>
            <p dir="ltr">
              <span>
                The cosmic energy, the moon and the sun are now aligning
                perfectly…
              </span>
            </p>
            <p dir="ltr">
              <span>
                While you were taking this reading, you had summoned the power
                of the universe…
              </span>
            </p>
            <p dir="ltr">
              <span>Which means, in just a few moments…</span>
            </p>
            <p dir="ltr">
              <span>You will be able to unleash your true potential….</span>
            </p>
            <p dir="ltr">
              <span>Because the stars are now in your very favor…</span>
            </p>
            <p dir="ltr">
              <span>
                Once you get that, you will not only know what path to take, but
                also know <u>exactly</u> what you should do next in your life.
              </span>
            </p>
            <p dir="ltr">
              <span>All without worry, doubt and fear…</span>
            </p>
            <p dir="ltr">
              <span>Even if things seem uncertain right now…</span>
            </p>
            <p dir="ltr">
              <span>
                You will be able to navigate through life’s challenges with the
                power of cosmic guidance.
              </span>
            </p>
            <p dir="ltr">
              <span id="highlight">So, congratulations!</span>
            </p>
            <p dir="ltr">
              <span>You made the right choice for taking this reading!</span>
            </p>
            <h2 id="lh">
              <span>
                As A {starSign}, Born In {month} {date}, {year}...
              </span>
            </h2>
            <p dir="ltr">
              <span>
                <b>You have the favor of the universe.</b>
              </span>
            </p>
            <p dir="ltr">
              <span>
                <b>
                  <i>While the cosmic energy is rising right now...</i>
                </b>
              </span>
            </p>
            <p dir="ltr">
              <span>
                Your moon sign and your sun sign are giving you the cosmic
                energy to receive your dreams.
              </span>
            </p>
            <p dir="ltr">
              <span>
                With the city you were born in, it holds you in a position where
                you can tap into your hidden energy.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Because {location} is a place that has a secret cosmic energy
                that most people don’t yet know…
              </span>
            </p>
            <p dir="ltr">
              <span>
                It is the kind of energy that can get you where you want to be
                in your life if you know how to use it.
              </span>
            </p>
            <h2 id="lh">
              <span>Now, See Your Astrology Chart Below</span>
            </h2>
            <p dir="ltr">
              <span>
                It’s fascinating to see how the planets are positioning in your
                favor.
              </span>
            </p>
            <p dir="ltr">
              <span>They represent how your life is going to be…</span>
            </p>
            <div id="chart">
              <StarryNight className="chart-background">
                {firstName && starSign && year && month && date && city && (
                  <AstrologicalChart
                    firstName={firstName}
                    starSign={starSign}
                    year={year}
                    month={month}
                    date={date}
                    city={city}
                  />
                )}
              </StarryNight>
            </div>
            <p dir="ltr">
              <span>
                - Your Moon is telling you to follow your intuitions, so you can
                receive what other planets want to give you.
              </span>
            </p>
            <p dir="ltr">
              <span>
                - Your Sun is showing you that your life changing moment is
                coming.
              </span>
            </p>
            <p dir="ltr">
              <span>
                - Your Mercury is reminding you to receive with gratitude.
              </span>
            </p>
            <p dir="ltr">
              <span>
                - Your Venus is guiding you to the path that will lead you to a
                secure and happy relationship.
              </span>
            </p>
            <p dir="ltr">
              <span>
                - Your Mars is keeping you from those bad luck and misfortunes.
              </span>
            </p>
            <p dir="ltr">
              <span>
                - Your Jupiter is holding you in a position where you are able
                to receive everything in abundance.
              </span>
            </p>
            <p dir="ltr">
              <span>
                - And your Saturn is giving you the prosperity of wealth, love,
                and health.
              </span>
            </p>
            <p dir="ltr">
              <span>As they are giving you these messages…</span>
            </p>
            <p dir="ltr">
              <span>They are also showing you that…</span>
            </p>
            <p dir="ltr">
              <span>
                <b>This is your destiny.</b>
              </span>
            </p>
            <p dir="ltr">
              <span>You see.</span>
            </p>
            <p dir="ltr">
              <span>
                They have been in the universe for over thousands of years…
              </span>
            </p>
            <p dir="ltr">
              <span>
                They have seen people live their life over and over again…
              </span>
            </p>
            <p dir="ltr">
              <span>And the universe knows…</span>
            </p>
            <h2 id="lh">
              <span>Everyone Has One Destiny</span>
            </h2>
            <p dir="ltr">
              <span>
                And by knowing your destiny, you will be able to get away from
                the life you don’t want…
              </span>
            </p>
            <p dir="ltr">
              <span>It can be the one you have right now…</span>
            </p>
            <p dir="ltr">
              <span>It can be the one you might have in the future…</span>
            </p>
            <p dir="ltr">
              <span>And it can also be the one in your past…</span>
            </p>
            <p dir="ltr">
              <span>
                <i>But the problem is this…</i>
              </span>
            </p>
            <h2 id="lh">
              <span>
                We Can’t Get Away Our Misfortune Without Aligning Ourselves With
                The Energy…
              </span>
            </h2>
            <p dir="ltr">
              <span>
                <i>
                  …even though we’ve known the cosmic planets are now in your
                  favor.
                </i>
              </span>
            </p>
            <div>
              <Image
                src={a}
                width="500"
                height="500"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>
            <p dir="ltr">
              <span>And if you remember…</span>
            </p>
            <p dir="ltr">
              <span id="highlight">
                What it takes to receive what you want is by harnessing those
                secret cosmic energy which you already have.
              </span>
            </p>
            <p dir="ltr">
              <span>
                And that’s something that allows you to have the power of the
                cosmic planets, within just a snap of fingers.
              </span>
            </p>
            <p dir="ltr">
              <span>
                When you have that power, you will be able to get to the place
                you want to be…
              </span>
            </p>
            <p dir="ltr">
              <span>Your health…</span>
            </p>
            <p dir="ltr">
              <span>Your career…</span>
            </p>
            <p dir="ltr">
              <span>Your relationship…</span>
            </p>
            <h2 id="lh">
              <span>It Will Get You Everything You Wish For</span>
            </h2>
            <p dir="ltr">
              <span>
                It is the key that can channel the cosmic energy into any forms
                of reality…
              </span>
            </p>
            <p dir="ltr">
              <span>…the form of reality you may have long for.</span>
            </p>
            <p dir="ltr">
              <span>
                Because the universe has always been trying to help us get
                everything we want.
              </span>
            </p>
            <p dir="ltr">
              <span>
                And the reason we haven’t got what we want is not because we
                don’t deserve it…
              </span>
            </p>
            <p dir="ltr">
              <span>But because we just can’t recognise it…</span>
            </p>
            <p dir="ltr">
              <span>Or we can say it is just hidden from our plain sight…</span>
            </p>
            <p dir="ltr">
              <span>
                Thousand years ago, people were able to use the cosmic energy to
                turn their dreams into reality.
              </span>
            </p>
            <p dir="ltr">
              <span>
                But... <i>why can't we now?</i>
              </span>
            </p>
            <p dir="ltr">
              <span>I assume you may know the answer.</span>
            </p>
            <p dir="ltr">
              <span>
                And that’s what I am going to share with you in the following
                words.
              </span>
            </p>
            <p dir="ltr">
              <span>
                In this short message, you will see how you can use what you
                already have, to <u>manifest</u> your desires…
              </span>
            </p>
            <p dir="ltr">
              <span>Whether it’s your health…</span>
            </p>
            <p dir="ltr">
              <span>Whether it’s your career…</span>
            </p>
            <p dir="ltr">
              <span>Whether it’s your relationship…</span>
            </p>
            <h2 id="lh">
              <span>
                You Can <u>Have It All</u>
              </span>
            </h2>
            <p dir="ltr">
              <span>
                And you will also see how close you are to the life of your
                dream that you may have been thinking…
              </span>
            </p>
            <p dir="ltr">
              <span>Because from my personal experience…</span>
            </p>
            <p dir="ltr">
              <span>
                We are often just "one step away"... to where we want to be.
              </span>
            </p>
            <Image
              src={b}
              width="500"
              height="500"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            />
            <p dir="ltr">
              <span>…It is a step that is so easy and simple to take.</span>
            </p>
            <p dir="ltr">
              <span>And most of us… just don’t know yet.</span>
            </p>
            <p dir="ltr">
              <span>
                When you know what can help you take that simple step, and how
                to do it…
              </span>
            </p>
            <p dir="ltr">
              <span>See how the entire world changes for you.</span>
            </p>
            <p dir="ltr">
              <span>I didn’t believe it myself at first.</span>
            </p>
            <p dir="ltr">
              <span>Because it was too good to be true for me.</span>
            </p>
            <p dir="ltr">
              <span>And I was thinking…</span>
            </p>
            <h2 id="lh">
              <span>
                “How can it be so simple and <u>WHY</u> don't we even know it
                after these thousands of years?”
              </span>
            </h2>
            <p dir="ltr">
              <span>
                Well, it turns out that only a few people know about this.
              </span>
            </p>
            <p dir="ltr">
              <span>
                And they have been using it to have a healthy body, wonderful
                career and romantic relationship.
              </span>
            </p>
            <p dir="ltr">
              <span id="highlight">
                They are satisfied. They are happy. They are living a life
                without worries.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Now, if you want to know how to use this cosmic energy to get
                what you truly want…
              </span>
            </p>
            <p dir="ltr">
              <span>
                …and even know <u>exactly</u> what you should do next…
              </span>
            </p>
            <p dir="ltr">
              <span>Then keep on reading.</span>
            </p>
            <p dir="ltr">
              <span>
                Because by the end of this message, you will get to the point
                where the cosmic energy is being with you.
              </span>
            </p>
            <p dir="ltr">
              <span>
                And more, having the power to live your life without darkness…
              </span>
            </p>
            <p dir="ltr">
              <span>
                <i>
                  …while knowing everything in the universe is going to be
                  rooting for you.
                </i>
              </span>
            </p>
            <Image
              src={c}
              width="500"
              height="500"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            />
            <h2 id="lh">
              <span>
                This Is The Story of How I Went From{" "}
                <u>Feeling Lost And Hopeless</u>... To{" "}
                <u>
                  Receiving Everything I Wanted And Living My Best Life Ever
                </u>
              </span>
            </h2>
            <p dir="ltr">
              <span>My name is Eileen Helion.</span>
            </p>
            <p dir="ltr">
              <span>It has been 11 years ago…</span>
            </p>
            <p dir="ltr">
              <span>I was in a situation where I felt lost in my life…</span>
            </p>
            <p dir="ltr">
              <span>
                <b>“I don’t know”</b>... was the answer to most of my questions…
              </span>
            </p>
            <p dir="ltr">
              <span>
                “I don’t know how I can make my body healthy without giving up
                the food I love the most…”
              </span>
            </p>
            <p dir="ltr">
              <span>
                “I don’t know how I can have more security from my job…”
              </span>
            </p>
            <p dir="ltr">
              <span>
                “I don’t know how I can make the man I adore pay attention to me
                and… will never pull away from me…”
              </span>
            </p>
            <p dir="ltr">
              <span>I didn’t know, really…</span>
            </p>
            <p dir="ltr">
              <span>
                While seeing my friends getting whatever they want in life, I
                did feel jealous and shamed…
              </span>
            </p>
            <p dir="ltr">
              <span>
                …because I felt like I was failing at everything that mattered.
              </span>
            </p>
            <h2 id="lh">
              <span>It Seemed Like They Had All Figured Out…</span>
            </h2>
            <p dir="ltr">
              <span>
                …and all I could do was sit on the sideline and watch.
              </span>
            </p>
            <Image
              src={d}
              width="500"
              height="500"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            />
            <p dir="ltr">
              <span>
                I was desperate to get my health, career and romance on track…
              </span>
            </p>
            <p dir="ltr">
              <span>…but I didn’t know where to start.</span>
            </p>
            <p dir="ltr">
              <span>And there was a sound whispered to my ears…</span>
            </p>
            <p dir="ltr">
              <span>“What if this is going to be my whole life?”</span>
            </p>
            <p dir="ltr">
              <span>I cried when I thought of this.</span>
            </p>
            <p dir="ltr">
              <span>Because this is not what I want in my life.</span>
            </p>
            <p dir="ltr">
              <span>NO. I screamed it in my mind.</span>
            </p>
            <p dir="ltr">
              <span>I shut the door and hide myself in my room…</span>
            </p>
            <p dir="ltr">
              <span>
                <b>…I felt lonely.</b>
              </span>
            </p>
            <p dir="ltr">
              <span>And I was alone at night for a long period of time.</span>
            </p>
            <p dir="ltr">
              <span>
                But one night, while I tilted my head to watch the stars…
              </span>
            </p>
            <p dir="ltr">
              <span>There was a sound talking to me in my head…</span>
            </p>
            <p dir="ltr">
              <span>It was a sound that was so gentle and warm…</span>
            </p>
            <p dir="ltr">
              <span>And I felt that I may have heard that before…</span>
            </p>
            <p dir="ltr">
              <span>Because I can feel that in my body.</span>
            </p>
            <p dir="ltr">
              <span>It said…</span>
            </p>
            <h2 id="lh">
              <span>
                “What If You Could Rewrite The Story And Receive The Life You
                Truly Deserve?”
              </span>
            </h2>
            <p dir="ltr">
              <span>I was stunned.</span>
            </p>
            <p dir="ltr">
              <span>I didn’t feel lonely for the very first time.</span>
            </p>
            <p dir="ltr">
              <span>I felt warm and knew in my gut that…</span>
            </p>
            <p dir="ltr">
              <span>
                The life I deserved was just nearby if I have guidance.
              </span>
            </p>
            <p dir="ltr">
              <span>
                And that was the moment I started to do something different.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Something that allowed me to be in charge of my own life.
              </span>
            </p>
            <p dir="ltr">
              <span>Because at that very moment, I knew it in my gut…</span>
            </p>
            <p dir="ltr">
              <span>
                I can rewrite my story and receive what I truly deserved.
              </span>
            </p>
            <p dir="ltr">
              <span>
                The very first thing I did was to look up the internet.
              </span>
            </p>
            <h2 id="lh">
              <span>And The First Thing I Saw Was Astrology Reading</span>
            </h2>
            <Image
              src={e}
              width="500"
              height="500"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            />
            <p dir="ltr">
              <span>It got my attention.</span>
            </p>
            <p dir="ltr">
              <span>
                Because the moment that changed my life was the moment I saw the
                stars.
              </span>
            </p>
            <p dir="ltr">
              <span>
                I took the reading, and it gave me everything I needed.
              </span>
            </p>
            <p dir="ltr">
              <span>Then it also gave me an audio to listen to.</span>
            </p>
            <p dir="ltr">
              <span>
                It was an audio that was designed for {starSign}.
                <b> (Yes, I am a {starSign} too!) </b>
              </span>
            </p>
            <p dir="ltr">
              <span>
                And it was an audio that can channel the power of astrology to
                any wish in your mind.
              </span>
            </p>
            <p dir="ltr">
              <span>
                When I started to listen to this audio, I still felt doubtful.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Because at that time, it was the first ever frequency audio we
                can find in the entire world.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Unlike most of the frequency audio out there right now…
              </span>
            </p>
            <p dir="ltr">
              <span>
                It is the only frequency audio that changes my whole life.
              </span>
            </p>
            <p dir="ltr">
              <span>
                I didn’t feel significant change, but after that 67 days…
              </span>
            </p>
            <h2 id="lh">
              <span>
                Things Started To Turn Into My Favour, And I Can Say… Everything
              </span>
            </h2>
            <p dir="ltr">
              <span>Because my health was suddenly getting better…</span>
            </p>
            <p dir="ltr">
              <span>
                I can easily and quickly lose weight without giving up my
                favourite food.
              </span>
            </p>
            <p dir="ltr">
              <span>And because of this, I started dating again!</span>
            </p>
            <p dir="ltr">
              <span>Guys were paying attention to me and asking me out.</span>
            </p>
            <p dir="ltr">
              <span>And best of all, I found the one.</span>
            </p>
            <p dir="ltr">
              <span>The one who I truly admired.</span>
            </p>
            <p dir="ltr">
              <span>
                He was so obsessed with me and committed to me that I never saw
                him pay attention to other women.
                <i> (Never. I swear!) </i>
              </span>
            </p>
            <p dir="ltr">
              <span>
                And on the career side, I quickly got promoted and became the
                go-to person in our field.
              </span>
            </p>
            <p dir="ltr">
              <span>I couldn’t believe that would happen, but it did!</span>
            </p>
            <h2 id="lh">
              <span>
                Everyone There Was So Friendly To Me And Saw What I Was Really
                Worth
              </span>
            </h2>
            <p dir="ltr">
              <span>
                And now, I am married to the man I adored and going to have kids
                very soon.
              </span>
            </p>
            <p dir="ltr">
              <span>
                My job is secure and I am so healthy that I feel light and happy
                all the time.
              </span>
            </p>
            <p dir="ltr">
              <span>
                And I have to say, I still can’t believe the little action I
                took 11 years ago can have this huge change in my life.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Until now, I still listen to this frequency audio at night,
                <b>
                  I can always make my <u>manifestation</u> come true with it.
                </b>
              </span>
            </p>
            <Image
              src={f}
              width="500"
              height="500"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            />
            <h2 id="lh">
              <span>{firstName}, As You Are Here…</span>
            </h2>
            <p dir="ltr">
              <span>I know it cannot be a coincidence…</span>
            </p>
            <p dir="ltr">
              <span>…but destiny.</span>
            </p>
            <p dir="ltr">
              <span>
                A destiny that the universe guides us together and is showing
                you the path toward where you want to go in your mind.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Maybe you feel doubtful everything I just told you can be true…
              </span>
            </p>
            <p dir="ltr">
              <span>…but I can feel you.</span>
            </p>
            <p dir="ltr">
              <span>Because I was in the same place.</span>
            </p>
            <p dir="ltr">
              <span>
                And I can tell you that, if this is the will of the universe…
              </span>
            </p>
            <p dir="ltr">
              <span>Then this can be the right track for you.</span>
            </p>
            <p dir="ltr">
              <span>
                The right track that can finally guide you to the place you want
                to be in.
              </span>
            </p>
            <p dir="ltr">
              <span>The health, the career, the relationship.</span>
            </p>
            <p dir="ltr">
              <span>The life you secretly want but haven’t told anyone.</span>
            </p>
            <p dir="ltr">
              <span>
                <b>Can you feel that?</b>
              </span>
            </p>
            <p dir="ltr">
              <span>
                Well, that feeling is your intuition and it is the keystone for
                your future.
              </span>
            </p>
            <p dir="ltr">
              <span>
                But it cannot help you to receive the life you deserve along the
                way… if you don’t have the help of the universe.
              </span>
            </p>
            <p dir="ltr">
              <span>Because without that…</span>
            </p>
            <p dir="ltr">
              <span>Everything you do will have to take EXTRA effort.</span>
            </p>
            <p dir="ltr">
              <span>
                Which means, if you can have the power of the universe…
              </span>
            </p>
            <h2 id="lh">
              <span>You Can Receive The Life You Deserve “Effortlessly”</span>
            </h2>
            <Image
              src={g}
              width="500"
              height="500"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            />
            <p dir="ltr">
              <span>
                <b>
                  And that’s the reason why I am here talking to you,{" "}
                  {firstName}.
                </b>
              </span>
            </p>
            <p dir="ltr">
              <span>
                I want to share the only and ultimate way that can allow you to
                receive the life you want with the power of astrology…
              </span>
            </p>
            <p dir="ltr">
              <span>It only takes you one minute every night to listen.</span>
            </p>
            <p dir="ltr">
              <span>
                Once you listen to it for the next two weeks, you will start
                feeling the world starts changing for you.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Whether it’s your health, career and your relationship…
              </span>
            </p>
            <p dir="ltr">
              <span>
                You will feel more confident, fulfilling and connected with a
                better future.
              </span>
            </p>
            <p dir="ltr">
              <span>And now, if you believe in astrology…</span>
            </p>
            <p dir="ltr">
              <span id="highlight">You deserve what you truly want.</span>
            </p>
            <h2 id="lh" style={{ marginBottom: "-35px" }}>
              <span>Introducing…</span>
            </h2>
            <h2 id="lh">
              <span>The Ultimate Astrology Frequency</span>
            </h2>
            <p dir="ltr">
              <span>
                The Ultimate Astrology Frequency is the first and only
                one-minute frequency that can allow you to connect with your
                star sign, {starSign}, and receive what you deserve within just
                67 days.
              </span>
            </p>
            <p dir="ltr">
              <span>
                This is a frequency audio that most people don’t have yet…
              </span>
            </p>
            <p dir="ltr">
              <span>
                Which means it can give you the most power and control before
                everything is too late.
              </span>
            </p>
            <p dir="ltr">
              <span>
                The reason I can say this is because I am still using it every
                single night.
              </span>
            </p>
            <p dir="ltr">
              <span>Also Casey, Alex, Jessie and many many others!</span>
            </p>
            <p dir="ltr">
              <span>
                We are still secretly using it to receive the life we deserve.
              </span>
            </p>
            <Image
              src={h}
              width="500"
              height="500"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            />
            <p dir="ltr">
              <span>And right now…</span>
            </p>
            <p dir="ltr">
              <span>
                If you truly want to receive the life that you are imagining in
                your mind…
              </span>
            </p>
            <p dir="ltr">
              <span>Then I can tell you that…</span>
            </p>
            <h2 id="lh">
              <span>Everything Is Going To Change For You</span>
            </h2>
            <p dir="ltr">
              <span>
                Because the moment you decided to take on this reading…
              </span>
            </p>
            <p dir="ltr">
              <span>
                <b>The universe has felt you and heard your voice.</b>
              </span>
            </p>
            <p dir="ltr">
              <span>It heard your voice that you can have a better life.</span>
            </p>
            <p dir="ltr">
              <span>And it is ready to grant your wish.</span>
            </p>
            <p dir="ltr">
              <span>And now the question is this…</span>
            </p>
            <p dir="ltr">
              <span>
                <b>Are you ready for that?</b>
              </span>
            </p>
            <p dir="ltr">
              <span>Receive the life you truly want?</span>
            </p>
            <p dir="ltr">
              <span>No more worry, doubt and fear?</span>
            </p>
            <p dir="ltr">
              <span>Get anything you want… effortlessly?</span>
            </p>
            <p dir="ltr">
              <span>And from my personal experience, I can tell you that…</span>
            </p>
            <h2 id="lh">
              <span>You Can Rewrite Your Own Story If You Choose To</span>
            </h2>
            <p dir="ltr">
              <span id="highlight">
                And within 67 days, everything can change for you.
              </span>
            </p>
            <p dir="ltr">
              <span>And the only limitation is your imagination.</span>
            </p>
            <p dir="ltr">
              <span>If you can think of it, you can have it.</span>
            </p>
            <p dir="ltr">
              <span>
                Because the universe, the Lunar Moon, Venus, and all other
                planets are now rooting for you.
              </span>
            </p>
            <p dir="ltr">
              <span>
                All you need to do now is listen to this <u>one-minute</u>{" "}
                Ultimate Astrology Frequency every night…
              </span>
            </p>
            <p dir="ltr">
              <span>…with a specific instruction I will show you…</span>
            </p>
            <p dir="ltr">
              <span>
                …then you can harness the power and receive it all, simply and
                easily
              </span>
            </p>
            <p dir="ltr">
              <span>
                <b>
                  And if you act right now to receive this gift from the
                  universe…
                </b>
              </span>
            </p>
            <h2 id="lh">
              <span>
                You Can Have The Ultimate Astrology Frequency For Just $7 Today
              </span>
            </h2>
            <p dir="ltr">
              <span>Yes, you are right!</span>
            </p>
            <p dir="ltr">
              <span>
                You can have the most powerful frequency without paying too much
                on your path to your best life.
              </span>
            </p>
            <p dir="ltr">
              <span>And if you truly want it...</span>
            </p>
            <p dir="ltr">
              <span>You need to take action right now, because...</span>
            </p>
            <h2 id="lh">
              <span>…We Will Have To Take Down This Website At Any Time</span>
            </h2>
            <p dir="ltr">
              <span>
                Because we cannot ensure if there will be someone using this
                power for bad reasons...
              </span>
            </p>
            <p dir="ltr">
              <span>So if you want to have this cosmic gift...</span>
            </p>
            <p dir="ltr">
              <span>We urge you to get yours right now.</span>
            </p>
            <p dir="ltr">
              <span>
                <b>And you need to remember...</b>
              </span>
            </p>
            <p dir="ltr">
              <span id="highlight">
                You cannot be here by coincidence, but destiny with options to
                choose your fate.
              </span>
            </p>
            <p dir="ltr">
              <span>
                <i>And time is always of the essence, {firstName}.</i>
              </span>
            </p>
            <p dir="ltr">
              <span>
                In the next 67 days, you can see your life remains the same...
              </span>
            </p>
            <p dir="ltr">
              <span>...Ignore everything I just shared with you...</span>
            </p>
            <p dir="ltr">
              <span>
                ...And have to face the misfortunes by yourself, alone.
              </span>
            </p>
            <p dir="ltr">
              <span>Or, you can manifest and get everything you want.</span>
            </p>
            <p dir="ltr">
              <span>
                Your dream health, your dream career, and your dream
                relationship.
              </span>
            </p>
            <p dir="ltr">
              <span>You can choose.</span>
            </p>
            <p dir="ltr">
              <span>Yours Truly,</span>
            </p>
            <p dir="ltr">
              <span>Eileen Helion</span>
            </p>
            <p dir="ltr">
              <span>
                <b>P.S. Thank you so much for your time reading my message</b>,
                and I can’t wait to hear the good news from you!
              </span>
            </p>
            <p dir="ltr">
              <span>
                <b>P.P.S. Have you been back to {city} recently?</b> I was born
                there too, and the cosmic energy there is now blossoming. You
                should feel lucky knowing it! ;)
              </span>
            </p>
            <div
              id="price-text"
              style={{
                textAlign: "center",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "22px",
                  marginTop: "50px",
                  marginBottom: "-10px",
                  fontStyle: "italic",
                  color: "#0d9901",
                  lineHeight: "1.5",
                }}
              >
                The Ultimate Astrology Frequency Is Yours Today For Only $7!
              </h3>
            </div>
            <div
              id="for-button"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
              <button
                id="bt"
                onClick={handleClick}
                style={{
                  fontWeight: 800,
                  fontSize: "43px",
                  color: "black",
                  // height: "80px",
                  verticalAlign: "middle",
                }}
              >
                Order Now!
              </button>
            </div>
          </div>
        </StarryNight>
        <div id="bottom" style={{ color: "white", marginTop: "-500px" }}>
          <footer>
            <p dir="ltr" style={{ color: "white" }}>
              <span>
                Results from our programs, methods, content and advice are not
                typical and your results may vary. Results are not guaranteed,
                and any claims made are for entertainment and educational
                purposes only. Results will vary based on individuals, how much
                effort is put forward, how long a person uses our methods for,
                and various other factors. Our customers results (shared on our
                sales pages, blog posts, emails etc), are based on the average
                of a sample set of course customers. The results may vary from
                person to person.
              </span>
            </p>
            <p dir="ltr">
              <span>
                Our content material featuring the pen name "Eileen Helion." The
                decision is rooted in our branding strategy. "Eileen Helion" has
                been meticulously crafted to embody the core essence of our
                content, ensuring alignment with our brand's principles and
                messaging. So, please take a moment to immerse yourself in the
                expertise and insights presented under the persona of "Eileen
                Helion." This choice underscores our dedication to delivering an
                exceptional experience tailored to your needs.
              </span>
            </p>
            <p id="ltr">
              <span>
                ClickBank is the retailer of products on this site. CLICKBANK®
                is a registered trademark of Click Sales Inc., a Delaware
                corporation located at 1444 S. Entertainment Ave., Suite 410
                Boise, ID 83709, USA and used by permission. ClickBank’s role as
                retailer does not constitute an endorsement, approval or review
                of these products or any claim, statement or opinion used in
                promotion of these products.
              </span>
            </p>
            <div id="ltr" style={{ fontStyle: "italic" }}>
              <div>
                <span>
                  For Product Support, please contact the vendor{" "}
                  <a href="kindledtorchpublishing@gmail.com">
                    <u>HERE</u>
                  </a>
                  .
                </span>
              </div>

              <div>
                <span>
                  For Order Support, please contact ClickBank{" "}
                  <a href="https://www.clkbank.com/#!/">
                    <u>HERE</u>
                  </a>
                  .
                </span>
              </div>
            </div>
            <p dir="ltr">
              <span>Terms and Conditions | Privacy Policy</span>
            </p>
            <p dir="ltr">
              <span>
                Copyright © Divine Astrology Reading - All Rights Reserved
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
