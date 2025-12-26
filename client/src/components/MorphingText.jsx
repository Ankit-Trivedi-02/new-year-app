import { useEffect, useState } from "react";

const MorphingText = ({ texts, interval = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // fade in next
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span
      className={`inline-block transition-all duration-500 ${
        fade
          ? "opacity-100 scale-100 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
          : "opacity-0 scale-90"
      }`}
    >
      {texts[index]}
    </span>
  );
};

export default MorphingText;
