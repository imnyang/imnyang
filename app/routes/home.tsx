import type { Route } from "./+types/home";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import { AnimatedTabs } from "~/components/AnimatedTabs";
import Readme from "~/components/README";
import TimelineComponents from "~/components/TimelineComponents";
import Top from "~/components/Top";

import { MailPlus, Rss, Instagram, Github } from "lucide-react";
import { Icon } from "lucide-react";
import { butterfly } from "@lucide/lab";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "암냥" },
    { name: "description", content: "Student Developer" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");
  const ref = React.useRef(null);

  useEffect(() => {
    if (activeTab === "Home") {
      navigate("/");
    } else if (activeTab === "Timeline") {
      navigate("/#timeline");
    }
  }, [activeTab, navigate]);

  useEffect(() => {
    if (window.location.hash === "#timeline") {
      setActiveTab("Timeline");
    }
  }, []);

  return (
    <div ref={ref} className="flex flex-col w-full items-center">
      <header className="w-full md:w-2/5 h-auto flex flex-row justify-between p-5">
        <Link to="/" accessKey="h" title="💕 Alt + H" className="text-2xl">
          💕
        </Link>
        <div className="flex items-center">
          <AnimatedTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>
      <Top />
      {/* ActivatedTab */}
      <div className="w-full md:w-2/5 mt-4">
        {activeTab === "Home" && (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-8">
              <Link to="mailto:me@imnya.ng" title="Mail" className="text-white">
                <MailPlus />
              </Link>
              <Link
                to="https://blog.imnya.ng"
                title="Blog"
                className="text-white"
              >
                <Rss />
              </Link>
              <Link
                to="https://github.com/imnyang"
                title="GitHub"
                className="text-white"
              >
                <Github />
              </Link>
              <Link
                to="https://instagram.com/loopback.ip"
                title="Instagram"
                className="text-white"
              >
                <Instagram />
              </Link>
              <Link
                to="https://bsky.app/profile/imnya.ng"
                title="BlueSky"
                className="text-white"
              >
                <Icon iconNode={butterfly} />
              </Link>
              <Link
                to="https://x.com/fur_local"
                title="𝕏"
                className="text-white text-3xl"
              >
                𝕏
              </Link>
            </div>
            <p className="text-lg text-neutral-400">
              {/* Read README.md with remark<Readme /> */}
              <br />
              <p>
                <kbd>
                  <img
                    src="https://f.imnya.ng/profile/8ea8ff1d-7e2c-4a2b-b688-38c21647ad8c.webp"
                    alt="암냥 & 남냥"
                    title=""
                    width="850"
                    style={{ borderRadius: "10px" }}
                  />
                </kbd>
              </p>
              <br />
              <p>
                <a href="https://skillicons.dev">
                  <kbd>
                    <img
                      width={850}
                      src="https://skillicons.dev/icons?i=typescript,js,c,cpp,java,kotlin,py,html,css,react,nextjs,tailwind,vite,nodejs,bun,elysia,express,fastapi,firebase,mongodb,postgres,sqlite,docker,nginx,github,githubactions,git,gradle,arduino,raspberrypi,figma,cloudflare,bots"
                    />
                  </kbd>
                </a>
              </p>
            </p>
            <p className="text-white">Normal Student Developer</p>
            <a href="https://sqlare.com" className="text-white">
              Team. Sqlare
            </a>
          </div>
        )}
        {activeTab === "Timeline" && (
          <div className="flex flex-col items-center justify-center">
            <br />
            <TimelineComponents />
          </div>
        )}
      </div>
    </div>
  );
}
