import React, { useState, useRef } from "react";

export default function Top() {
  const avatarRef = useRef<HTMLImageElement | null>(null); // Ref 타입 변경

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
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl font-bold">암냥</h1>
        <p className="text-sm text-neutral-400">@imnyang</p>
      </div>
    </div>
  );
}
