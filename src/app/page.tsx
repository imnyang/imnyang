'use client';

import { useEffect, useState, forwardRef, Ref } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Repos from "./components/repos";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./index.css";

interface TippyWrapperProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  ref?: Ref<HTMLAnchorElement>;
}

const TippyWrapper = forwardRef<HTMLAnchorElement, TippyWrapperProps>((props, ref) => (
  <a {...props} ref={ref} />
));
TippyWrapper.displayName = 'TippyWrapper';

export default function Home() {
  const [userInfo, setUserInfo] = useState({ public_repos: 0, followers: 0 });

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await fetch("https://api.github.com/users/imnyang");
        const data = await response.json();
        setUserInfo({ public_repos: data.public_repos, followers: data.followers });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }

    fetchUserInfo();
  }, []);

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

  interface SocialLinkProps {
    href: string;
    icon: string;
    tooltip: string;
  }

  const SocialLink = ({ href, icon, tooltip }: SocialLinkProps) => (
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
    <div className="main">
      <div className="profile flex flex-col items-center gap-4">
        <Image src={imageSrc} width={128} height={128} className="rounded-full avatar" alt="Profile" priority />
        <h1 className="text-white text-2xl font-bold">hyun._.suk</h1>
        <div className="flex flex-row gap-6">
          {isMobile && (
            <SocialLink href="supertoss://send?bank=토스뱅크&accountNo=100079352039&origin=qr" icon="fa-solid fa-circle-dollar-to-slot" tooltip="Toss" />
          )}
          <SocialLink href="https://github.com/imnyang" icon="fa-brands fa-github" tooltip={`Github | ${userInfo.public_repos} Repos`} />
          <SocialLink href="mailto:me@imnyang.xyz" icon="fa-solid fa-at" tooltip="Mail" />
          <SocialLink href="https://instagram.com/fur_local" icon="fa-brands fa-instagram" tooltip="Instagram" />
          <SocialLink href="https://x.com/fur_local" icon="fa-brands fa-x-twitter" tooltip="X" />
        </div>
      </div>
    </div>
  );
}