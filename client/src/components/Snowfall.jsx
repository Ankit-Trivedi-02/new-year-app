const Snowfall = () => {
  const flakes = Array.from({ length: 40 });

  return (
    <div className="snow pointer-events-none select-none fixed top-0 left-0 w-full h-full overflow-hidden z-50">
      {flakes.map((_, i) => (
        <span
          key={i}
          className="snowflake absolute text-white"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 5 + Math.random() * 10 + "s",
            fontSize: 12 + Math.random() * 18 + "px",
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
};

export default Snowfall;
