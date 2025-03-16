import { useState } from "react";
import "../../index.css";
import Image from "@/profile.avif";

export default function Top() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scale, setScale] = useState(1.15);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMousePos((prev) => ({
      x: prev.x + (x - prev.x) * 0.1,
      y: prev.y + (y - prev.y) * 0.1,
    }));
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prev) => {
      const newScale = prev + e.deltaY * -0.0025;
      return Math.min(Math.max(newScale, 1), 3);
    });
  };

  return (
    <div className="bg-background text-foreground w-full h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full md:w-[50%] h-full py-16 md:py-32">
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center items-center md:items-end md:pr-16">
          <div className="text-center md:text-right">
            <h1 className="text-5xl ntypefont">
              Nam
              <br />
              HyunSuk
            </h1>
            <p className="mt-4 text-xl">
              암냥이라는 이름으로 활동하고 있는
              <br /> 학생 개발자 남현석이라고 합니다.
            </p>
          </div>
        </div>
        <div 
          className="md:w-[55%] select-none p-5 md:p-0 w-full h-full flex justify-center md:justify-end items-end rounded-3xl mb-8 md:mb-0 overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onWheel={handleWheel}
        >
          <img
            src={Image}
            alt="Me"
            className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-out"
            style={{
              transform: `scale(${isHovering ? scale : 1})`,
              transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
