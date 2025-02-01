"use client";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "DevOps Engineer",
  "Kubernetes Expert",
  "Cloud Engineer",
  "Full-Stack Developer",
  "Site Reliability Engineer",
  "Platform Engineer",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < roles[index].length) {
          setText((prev) => prev + roles[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100); // Typing is slower, deleting is faster

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  // Blinking Cursor Effect
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="text-emerald-400 font-semibold">
      {text}
      {blink && <span className="blinker">|</span>}
    </span>
  );
}
