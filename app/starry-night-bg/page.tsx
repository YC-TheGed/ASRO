"use client";

import React, { useMemo, useState, useEffect } from "react";
import styles from "./StarryNight.module.css";

const StarryNight = () => {
  // Generate fixed star positions
  const fixedStars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
      },
    }));
  }, []);

  // State for shooting stars
  const [shootingStars, setShootingStars] = useState([]);

  // Effect for generating shooting stars
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.2) {
        // 20% chance of shooting star appearing
        const newStar = {
          id: Date.now(),
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
          },
        };
        setShootingStars((stars) => [...stars, newStar]);
        setTimeout(() => {
          setShootingStars((stars) =>
            stars.filter((star) => star.id !== newStar.id)
          );
        }, 3000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.starryNight}>
      {fixedStars.map((star) => (
        <div key={star.id} className={styles.star} style={star.style}></div>
      ))}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className={styles.shootingStar}
          style={star.style}
        ></div>
      ))}
    </div>
  );
};

export default StarryNight;
