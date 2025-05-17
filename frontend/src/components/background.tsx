import React, { useEffect, useState } from "react";

function Background() {
  const [stars, setStars] = useState<
    {
      id: string;
      size: number;
      x: number;
      y: number;
      opacity: number;
      animationDuration: number;
    }[]
  >();
  const [meteors, setMeteors] = useState<
    {
      id: string;
      size: number;
      x: number;
      y: number;
      delay: number;
      animationDuration: number;
    }[]
  >();

  useEffect(() => {
    generateStars();
    generateMeteors();

    window.addEventListener("resize", () => generateStars());

    return () => window.removeEventListener("resize", () => generateStars());
  }, []);

  const generateStars = () => {
    const starsArray = [];
    const starCount =
      Math.floor(window.innerWidth * window.innerHeight) / 10000; // Random number of stars between 50 and 150
    for (let i = 0; i < starCount; i++) {
      const id = `star-${i}`;
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.5;
      const animationDuration = Math.random() * 4 + 2;

      starsArray.push({ id, size, x, y, opacity, animationDuration });
    }
    setStars([...starsArray]);
  };
  const generateMeteors = () => {
    const meteorsArray = [];
    const meteorsCount = 4;

    for (let i = 0; i < meteorsCount; i++) {
      const id = `star-${i}`;
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 20;
      const delay = Math.random() * 15;
      const animationDuration = Math.random() * 3 + 3;

      meteorsArray.push({ id, size, x, y, delay, animationDuration });
    }
    setMeteors([...meteorsArray]);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-screen h-screen">
      {stars &&
        stars.map((star) => (
          <div
            key={star.id}
            className="animate-pulse-subtle star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      {meteors &&
        meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="animate-meteor meteor"
            style={{
              width: `${meteor.size * 60}px`,
              height: `${meteor.size}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              animationDelay: `${meteor.delay}`,
              animationDuration: `${meteor.animationDuration}s`,
            }}
          />
        ))}
    </div>
  );
}

export default Background;
