import React, { useState, useRef } from "react";

export default function Top() {
  const [angle, setAngle] = useState(0);
  const avatarRef = useRef<HTMLImageElement | null>(null); // Ref 타입 변경

  const handleMouseEnter = () => {
    if (avatarRef.current) {
      avatarRef.current.style.animation = `rotate 1s linear infinite`;
    }
  };

  const handleMouseLeave = () => {
    if (avatarRef.current) {
      const computedStyle = window.getComputedStyle(avatarRef.current);
      const matrix = computedStyle.transform;

      if (matrix && matrix !== "none") {
        const values = matrix.match(/matrix\((.+)\)/)?.[1].split(", ");
        if (values) {
          const a = parseFloat(values[0]);
          const b = parseFloat(values[1]);
          const currentAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          setAngle((prev) =>
            currentAngle >= 0 ? currentAngle : currentAngle + 360
          );
        }
      }
      avatarRef.current.style.animation = "none";
      avatarRef.current.style.transform = `rotate(${angle}deg)`;
    }
  };

  return (
    <div
      id="top"
      className="w-auto text-center flex items-center justify-center flex-col gap-4"
    >
      <img
        src="https://f.imnya.ng/profile/34b47ba35448cc74a659bcec443c3fbc.webp"
        alt="imnyang"
        width={200}
        height={200}
        id="avatar"
        ref={avatarRef}
        style={
          {
            "--rotate-angle": `${angle}deg`,
          } as React.CSSProperties
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl font-bold">암냥</h1>
        <p className="text-sm text-neutral-400">@imnyang</p>
      </div>
    </div>
  );
}
