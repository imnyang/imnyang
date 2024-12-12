'use client';

import { useEffect, useState, forwardRef, Ref } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./index.css";

import { Link as LinkIcon  } from 'lucide-react';

const events = [
  { date: '2024-12-07', description: '글로벌 스타트업 학교 팀 1위', link: 'https://blog.imnyang.xyz/blog/gss' },
  { date: '2024-12-07', description: '글로벌 스타트업 학교 개인 최우수상', link: 'https://blog.imnyang.xyz/blog/gss' },
  { date: '2024-08-18', description: '29회 해킹캠프 CTF 1위 (고민중독)', link: 'https://ctf.hackingcamp.org/' },
  { date: '2024-08-05', description: '29회 해킹캠프 선발', link: 'https://hackingcamp.org/' },
  { date: '2024-08-01', description: '글로벌 스타트업 학교 2기 베트남 해외 연수 데모데이 대상 (1위)', link: 'http://ncf.or.kr' },
  { date: '2024-05-16', description: '글로벌 스타트업 학교 2기 합격', link: 'http://ncf.or.kr' },
  { date: '2024-05-11', description: 'LG AI 청소년 캠프 1기 LG 탐색상 수상', link: 'https://lgaiyouthcamp.or.kr/' },
  { date: '2024-05-11', description: 'LG AI 청소년 캠프 1기 수료', link: 'https://lgaiyouthcamp.or.kr/' },
  { date: '2024-04-22', description: '@isangjeong.today (인천상정중학교의 오늘 급식)', link: 'https://www.instagram.com/isangjeong.today/' },
  { date: '2024-04-06', description: 'TimeTable (Sekai 개조판 배포) [API 유실]', link: 'https://timeline.imnyang.xyz' },
  { date: '2024-03-24', description: 'Dreamhack #133', link: 'https://dreamhack.io/users/40116/wargame' },
  { date: '2024-03-24', description: 'Ubuntu Mirror', link: 'https://launchpad.net/ubuntu/+mirror/mirror.imnyang.xyz-release' },
  { date: '2024-03-24', description: '내 목소리로 AI Cover 만들기', link: 'https://colab.research.google.com/drive/1a4G4hD9huBeGRZhEL2HNDMpqSuf4y61k?usp=sharing' },
  { date: '2024-01-26', description: 'Fastapi를 통해 API 제작', link: 'https://github.com/imnyang/api' },
  { date: '2023-12-20', description: 'LG AI 청소년 캠프 1기 합격' },
  { date: '2023-11-14', description: '인천상정중학교 2023학년도 SW 문제 해결 활동 우수상(2위) 수여' },
  { date: '2023-11-01', description: '블로그 시작', link: 'https://blog.imnyang.xyz' },
  { date: '2023-10-12', description: '나는 로컬 시간을 알고 싶다', link: 'https://time.imnyang.xyz/' },
  { date: '2023-09-24', description: 'sqlr.kr 기획 및 초기 개발', link: 'https://github.com/sqlare/sqlr.kr/tree/main' },
  { date: '2023-09-02', description: '선린인터넷고등학교 제6회 소프트웨어나늠축제 Layer7 부서 과정 이수' },
  { date: '2023-08-26', description: '컴시간 시간표를 더 나아보이게 Sekai', link: 'https://github.com/imnyang/Sekai' },
  { date: '2023-08-23', description: '디스코드 통화방 녹음', link: 'https://github.com/imnyang/discord-voice-rec'},
  { date: '2023-07-24', description: '한국정보기술연구원이 주도하는 사이버 가디언즈 보안캠프 수료' },
  { date: '2023-03-20', description: '디스코드에서 대화형 인공지능 Siru 제작', link: 'https://github.com/imnyang/siru' },
  { date: '2023-05-15', description: '한국 코드페어 예선 진출' },
  { date: '2023-03-14', description: '타이머', link: 'https://github.com/imnyang/imnyang-timer' },
  { date: '2022-12-20', description: '2022 SW영재 창작대회 은상 수상'},
  { date: '2022-09-27', description: '2022 삼성 주니어 SW 창작대회 본선 진출' },
  { date: '2022-05-23', description: '2022학년도 석정초SW영재학급 첫 수업' },
  { date: '2022-07-26', description: '제 14회 맑은하늘 맑은웃음 공모전에서 맑은웃음상 수여' },
  { date: '2021-11-14', description: 'Become a ZEPETO Creator 이수' },
  { date: '2021-05-19', description: '소프트웨어와 전자신문이 주관한 소프트웨어재단 꿈찾기 캠프 이수' },
  { date: '2018-01-27', description: '제4회 맑은하늘 맑은웃음 어린이 문예공모전에서 위닉스상(2위) 수여' },
];


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
  const [imageSrc, setImageSrc] = useState("https://f.imnyang.xyz/profile/imnyang.webp");
  const [gotoHref, setGotoHref] = useState("/");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // 초기화 시점에 호출
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateImageSrc = () => {
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
    };

    updateImageSrc();
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
      <div className="profile flex flex-col items-center gap-4 mt-10 mb-10">
        <Image src={imageSrc} width={128} height={128} className="rounded-full avatar" alt="Profile" priority />
        <h1 className="text-white text-2xl font-bold">hyun._.suk</h1>
        <div className="flex flex-row gap-6">
          {isMobile && (
            <SocialLink href="supertoss://send?bank=토스뱅크&accountNo=100079352039&origin=qr" icon="fa-solid fa-circle-dollar-to-slot" tooltip="Toss" />
          )}
          <SocialLink href={gotoHref} icon="fa-brands fa-github" tooltip={`Github | ${userInfo.public_repos} Repos`} />
          <SocialLink href="mailto:me@imnyang.xyz" icon="fa-solid fa-at" tooltip="Mail" />
          <SocialLink href="https://instagram.com/fur_local" icon="fa-brands fa-instagram" tooltip="Instagram" />
          <SocialLink href="https://x.com/fur_local" icon="fa-brands fa-x-twitter" tooltip="X" />
        </div>
      </div>
      <div className="timeline text-white">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col mb-3">
              <p className="tabular-nums">{event.date}</p>
              <div className="flex items-center">
                {event.link && (
                  <Link href={event.link} className="flex gap-2">
                    <LinkIcon width={18} />
                    <span>{event.description}</span>
                  </Link>
                )}
                {!event.link && <span className="ml-7">{event.description}</span>}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}