import type { Route } from "./+types/home";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

import { AnimatedTabs } from "~/components/AnimatedTabs";
import { TimeCounter } from "~/components/TimeCounter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const ref = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (activeTab === "Timeline") {
      navigate("/timeline");
    }
  }, [activeTab, navigate]);

  return (
    <div ref={ref} className="flex flex-col w-full items-center">
      <header className="w-full md:w-2/5 h-auto flex flex-row justify-between p-5">
        <Link to="/" accessKey="h" title="💕 Alt + H" className="text-2xl">💕</Link>
        <div className="flex items-center">
          <AnimatedTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>
      <div id="top" className="w-auto text-center flex items-center justify-center flex-col gap-4">
        <img src="https://f.imnya.ng/profile/34b47ba35448cc74a659bcec443c3fbc.webp" alt="imnyang" width={200} height={200} className="rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">암냥</h1>
          <p className="text-sm text-neutral-400">@imnyang</p>
        </div>
        <TimeCounter />
        <h2 className="text-xl">{`Tab: ${activeTab}`}</h2>
      </div>

    </div>
  );
}