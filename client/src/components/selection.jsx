import { useCardData } from "../context/DataContext";

const Selection = () => {
  const { cardData, updateData } = useCardData();

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl space-y-4">
      <h2 className="text-2xl font-bold text-indigo-700">
        🎨 Card Customization
      </h2>

      <input
        className="w-full p-3 rounded-lg border"
        value={cardData.name}
        onChange={(e) => updateData("name", e.target.value)}
        placeholder="Your Name"
      />

      <textarea
        className="w-full p-3 rounded-lg border"
        rows="3"
        value={cardData.message}
        onChange={(e) => updateData("message", e.target.value)}
        placeholder="New Year Message"
      />

      <div className="grid grid-cols-2 gap-3">
        <select
          className="p-3 rounded-lg border"
          value={cardData.bgColor}
          onChange={(e) => updateData("bgColor", e.target.value)}
        >
          <option value="indigo">Indigo</option>
          <option value="rose">Rose</option>
          <option value="emerald">Emerald</option>
          <option value="slate">Slate</option>
        </select>

        <select
          className="p-3 rounded-lg border"
          value={cardData.textAlign}
          onChange={(e) => updateData("textAlign", e.target.value)}
        >
          <option value="text-center">Center</option>
          <option value="text-left">Left</option>
          <option value="text-right">Right</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <select
          className="p-3 rounded-lg border"
          value={cardData.font}
          onChange={(e) => updateData("font", e.target.value)}
        >
          <option value="font-serif">Serif</option>
          <option value="font-sans">Sans</option>
          <option value="font-mono">Mono</option>
        </select>

        <input
          className="p-3 rounded-lg border"
          value={cardData.emoji}
          onChange={(e) => updateData("emoji", e.target.value)}
          placeholder="Emoji 🎄"
        />
      </div>
    </div>
  );
};

export default Selection;
