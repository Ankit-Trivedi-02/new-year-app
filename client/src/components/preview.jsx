import { useCardData } from "../context/DataContext";
import MorphingText from "./MorphingText";
import { useRef } from "react";
import { toPng } from "html-to-image";

const bgMap = {
  indigo: "from-indigo-800/80 to-purple-800/80",
  rose: "from-rose-700/80 to-pink-700/80",
  emerald: "from-emerald-700/80 to-teal-700/80",
  slate: "from-slate-800/80 to-slate-900/80",
};

const morphingWords = [
  "Celebration",
  "Joy",
  "Fun",
  "Cheers",
  "Magic",
  "Excitement",
];

const Preview = () => {
  const { cardData } = useCardData();
  const cardRef = useRef(null);

  const handleDownload = () => {
    if (!cardRef.current) return;
    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `NewYearCard-${cardData.year}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download card", err);
      });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card Preview */}
      <div
        ref={cardRef}
        className={`w-full max-w-3xl h-[440px] rounded-3xl p-10 text-white
          bg-gradient-to-br ${bgMap[cardData.bgColor]}
          shadow-[0_15px_60px_rgba(0,255,255,0.15)]
          backdrop-blur-xl border border-white/20
          transform hover:scale-105 transition-all duration-500
          flex flex-col justify-between ${cardData.textAlign} ${cardData.font}`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex flex-wrap items-center gap-3">
          <span className="drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">
            {cardData.emoji} Happy New Year {cardData.year} —
          </span>
          <MorphingText texts={morphingWords} />
        </h1>

        <p className="text-xl md:text-2xl italic mb-6 text-white/90 drop-shadow-md">
          {cardData.message}
        </p>

        <p className="text-lg font-semibold text-white/80 drop-shadow-sm">
          — {cardData.name}
        </p>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 shadow-lg"
      >
        Download Card
      </button>
    </div>
  );
};

export default Preview;
