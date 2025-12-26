import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    name: "John Doe",
    message: "May this year bring joy, warmth, and success ❄️✨",
    year: "2026",
    bgColor: "indigo",
    textAlign: "center",
    emoji: "🎆",
    font: "font-serif",
  });

  const updateData = (key, value) => {
    setCardData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <DataContext.Provider value={{ cardData, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useCardData = () => useContext(DataContext);
