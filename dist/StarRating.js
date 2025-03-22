import { useState } from "react";
import "./StarRating.css"; // For animations

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  textcolor = "#0d0d0d",
  size = 48,
  messages = [],
  className = "",
  defaultRating = 0,
  onSetRating = () => {},
  allowHalfStars = true,
  animation = "none", // "scale" | "rotate" | "bounce" | "none"
  allowReset = true,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverValue, setHoverValue] = useState(null);

  const handleMouseMove = (e, i) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const isHalf = x < width / 2;
    setHoverValue(i + (isHalf ? 0.5 : 1));
  };

  const handleClick = (value) => {
    if (allowReset && value === rating) {
      setRating(0);
      onSetRating(0);
    } else {
      setRating(value);
      onSetRating(value);
    }
  };

  const displayRating = hoverValue ?? rating;

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "16px" }}
      className={className}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {Array.from({ length: maxRating }, (_, i) => {
          const full = displayRating >= i + 1;
          const half = displayRating === i + 0.5;
          const value = full ? i + 1 : half ? i + 0.5 : i + 1;

          return (
            <Star
              key={i}
              full={full}
              half={half}
              size={size}
              color={color}
              onRate={() => handleClick(value)}
              onHoverIn={() => {}}
              onHoverOut={() => setHoverValue(null)}
              onMouseMove={
                allowHalfStars ? (e) => handleMouseMove(e, i) : undefined
              }
              animation={animation}
            />
          );
        })}
        <p
          style={{
            margin: "0 0 0 8px",
            lineHeight: "1",
            color: textcolor,
            fontSize: `${size / 1.5}px`,
            fontWeight: 500,
          }}
        >
          {messages.length === maxRating
            ? messages[Math.floor(displayRating) - 1]
            : displayRating || ""}
        </p>
      </div>
    </div>
  );
}

function Star({
  full,
  half,
  onRate,
  onHoverIn,
  onHoverOut,
  onMouseMove,
  color,
  size,
  animation,
}) {
  return (
    <span
      role="button"
      tabIndex="0"
      className={`star ${animation}`}
      style={{ cursor: "pointer", display: "inline-block" }}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      onMouseMove={onMouseMove}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onRate();
      }}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l-5.18 3.73c-.68.49-1.6-.17-1.39-.95l1.64-6.36-4.9-4.24c-.61-.53-.28-1.54.52-1.63l6.56-.57 2.52-6.1c.3-.72 1.32-.72 1.62 0l2.52 6.1 6.56.57c.8.07 1.13 1.1.52 1.63l-4.9 4.24 1.64 6.36c.21.78-.71 1.44-1.39.95L12 17.27z" />
        </svg>
      ) : half ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor={color} />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            stroke={color}
            strokeWidth="2"
            d="M12 17.27l-5.18 3.73c-.68.49-1.6-.17-1.39-.95l1.64-6.36-4.9-4.24c-.61-.53-.28-1.54.52-1.63l6.56-.57 2.52-6.1c.3-.72 1.32-.72 1.62 0l2.52 6.1 6.56.57c.8.07 1.13 1.1.52 1.63l-4.9 4.24 1.64 6.36c.21.78-.71 1.44-1.39.95L12 17.27z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          stroke={color}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l-5.18 3.73c-.68.49-1.6-.17-1.39-.95l1.64-6.36-4.9-4.24c-.61-.53-.28-1.54.52-1.63l6.56-.57 2.52-6.1c.3-.72 1.32-.72 1.62 0l2.52 6.1 6.56.57c.8.07 1.13 1.1.52 1.63l-4.9 4.24 1.64 6.36c.21.78-.71 1.44-1.39.95L12 17.27z" />
        </svg>
      )}
    </span>
  );
}
