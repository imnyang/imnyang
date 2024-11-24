'use client';

import { useEffect, useState, forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Repos from "./components/repos";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./index.css";

const TippyWrapper = forwardRef<HTMLAnchorElement, any>((props, ref) => (
  <a {...props} ref={ref} />
));
TippyWrapper.displayName = 'TippyWrapper';

export default function Home() {
  const searchParams = useSearchParams();
  const [imageSrc, setImageSrc] = useState(
    "https://f.imnyang.xyz/profile/imnyang.webp",
  );
  const [gotoHref, setGotoHref] = useState("/");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (searchParams.has("kawaii")) {
      setImageSrc("https://f.imnyang.xyz/profile/hatchu_imnyang.webp");
      setGotoHref("/");
    } else {
      setImageSrc("https://f.imnyang.xyz/profile/imnyang.webp");
      setGotoHref("/?kawaii");
    }
    if (searchParams.has("no_hair") && searchParams.has("no_ear")) {
      setImageSrc("https://f.imnyang.xyz/profile/no_ear_no_long_hair.png");
    } else if (searchParams.has("no_ear")) {
      setImageSrc("https://f.imnyang.xyz/profile/no_ear.png");
    } else if (searchParams.has("no_hair")) {
      setImageSrc("https://f.imnyang.xyz/profile/no_hair.avif");
    }
    if (searchParams.has("fast")) {
      const style = document.createElement("style");
      style.innerHTML = `
        .profile:hover {
          animation: rotate 1ms linear infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, [searchParams]);

  const SocialLink = ({ href, icon, tooltip }: { href: string; icon: string; tooltip: string }) => (
    <Tippy content={tooltip} placement="bottom">
      <TippyWrapper
        href={href}
        style={{
          color: "#b2a1af",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className={icon} style={{ fontSize: "24px" }} />
      </TippyWrapper>
    </Tippy>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <p style={{ color: "transparent" }}>/?no_hair</p>
          {/* /?no_ear */}
          <img src={imageSrc} width={256} className="profile" alt="Profile" />
          <h1
            style={{
              color: "#ffe7fb",
              fontSize: 60,
              margin: 0,
              fontWeight: "700",
            }}
          >
            <Link
              style={{
                color: "#ffe7fb",
                fontSize: 60,
                margin: 0,
                fontWeight: "700"
              }}
              href={gotoHref}
            >
              hyun._.suk
            </Link>
          </h1>

          <div className="mt-5" style={{ color: "white" }}>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isMobile && (
                  <SocialLink 
                    href="supertoss://send?bank=토스뱅크&accountNo=100079352039&origin=qr"
                    icon="fa-solid fa-circle-dollar-to-slot"
                    tooltip="Toss"
                  />
                )}
                <SocialLink 
                  href="https://github.com/imnyang"
                  icon="fa-brands fa-github"
                  tooltip="Github"
                />
                <SocialLink 
                  href="mailto:me@imnyang.xyz"
                  icon="fa-solid fa-at"
                  tooltip="Mail"
                />
                <SocialLink 
                  href="https://instagram.com/not.furry_"
                  icon="fa-brands fa-instagram"
                  tooltip="Instagram"
                />
                <SocialLink 
                  href="https://x.com/mahiro_me"
                  icon="fa-brands fa-x-twitter"
                  tooltip="X"
                />
              </div>
              <br />
              🖥️ Software Engineer
              <br />
              🎨 Team. <a href="https://sqlare.com">Sqlare</a>
              <br />
              <br />
              📚 Middle School Student in South Korea
              <br />
              <br />
              <span style={{ color: "transparent" }}>Enter Furry.</span>
            </div>
          </div>
        </div>

        <div className="right">
          <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
            <a href="https://github.com/imnyang">
              <i
                className="fa-brands fa-github"
                style={{ color: "white", paddingRight: 8 }}
              />
              <Repos /> Repos
            </a>
            <a href="https://blog.imnyang.xyz">📝 Blog</a>
            <Link href="/timeline">🌈 Timeline</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
            <p style={{ color: "white" }}>Project</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
            <a href="https://github.com/sqlare/sqlr.kr/tree/main">
              🔗 sqlr.kr (SQLite)
            </a>
            <a hidden href="https://qloat.com">
              🗨️ Qloat
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
            <a href="https://instagram.com/today.isangjeong">
              🥕 isangjeong.today
            </a>
            <a href="https://github.com/imnyang/FakeAlyac">💊 FakeAlyac</a>
          </div>
        </div>
      </div>
    </div>
  );
}