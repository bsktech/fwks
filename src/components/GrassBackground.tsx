export const GrassBackground = () => {
  const blades = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    w: Math.random() * 8 + 5,
    h: Math.random() * 60 + 35,
    delay: Math.random() * 2,
    dur: Math.random() * 1.5 + 2,
  }));

  const flies = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 75 + 10,
    size: Math.random() * 3 + 2,
    delay: Math.random() * 6,
    dur: Math.random() * 4 + 6,
  }));

  return (
    <>
      <div className="hero-grass">
        {blades.map((b) => (
          <div
            key={b.id}
            className="grass-blade"
            style={{
              width: b.w,
              height: b.h,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.dur}s`,
            }}
          />
        ))}
      </div>
      {flies.map((f) => (
        <div
          key={f.id}
          className="firefly"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.dur}s`,
          }}
        />
      ))}
    </>
  );
};
