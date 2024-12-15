'use client';

import React, { useEffect, useState, forwardRef, Ref, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import "./index.css";

import { Link as LinkIcon  } from 'lucide-react';
import { Tooltip } from "@/components/ui/tooltip";

import { Icon, Stack } from "@chakra-ui/react"
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/accordion"
import { Text } from "@chakra-ui/react"
import { Heart, ChartBar } from "lucide-react";

const events = [
  { date: '2024-12-14', description: '2024 글로벌스타트업학교 K-청소년스타트업 경진대회 우수상 수상', category: "Award", link: "https://www.ncf.or.kr/projects/'2024-%EA%B8%80%EB%A1%9C%EB%B2%8C%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%ED%95%99%EA%B5%90-k-%EC%B2%AD%EC%86%8C%EB%85%84%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C'-%EC%B0%B8%EA%B0%80%EC%9E%90-%EB%AA%A8%EC%A7%91" },
  { date: '2024-12-07', description: '글로벌 스타트업 학교 팀 1위', category: "Award", link: 'https://blog.imnyang.xyz/blog/gss' },
  { date: '2024-12-07', description: '글로벌 스타트업 학교 개인 최우수상', category: "Award", link: 'https://blog.imnyang.xyz/blog/gss' },
  { date: '2024-08-18', description: '29회 해킹캠프 CTF 1위 (고민중독)', category: "Award", link: 'https://ctf.hackingcamp.org/' },
  { date: '2024-08-05', description: '29회 해킹캠프 선발', category: "Conference", link: 'https://hackingcamp.org/' },
  { date: '2024-08-01', description: '글로벌 스타트업 학교 2기 베트남 해외 연수 데모데이 대상 (1위)', category: "Award", link: 'http://ncf.or.kr' },
  { date: '2024-05-16', description: '글로벌 스타트업 학교 2기 합격', category: "Education", link: 'http://ncf.or.kr' },
  { date: '2024-05-11', description: 'LG AI 청소년 캠프 1기 LG 탐색상 수상', category: "Award", link: 'https://lgaiyouthcamp.or.kr/' },
  { date: '2024-05-11', description: 'LG AI 청소년 캠프 1기 수료', category: "Award", link: 'https://lgaiyouthcamp.or.kr/' },
  { date: '2024-04-22', description: '@isangjeong.today (인천상정중학교의 오늘 급식)', category: "Project", link: 'https://www.instagram.com/isangjeong.today/' },
  { date: '2024-03-24', description: 'Dreamhack #133', link: 'https://dreamhack.io/users/40116/wargame' },
  { date: '2024-03-24', description: 'Ubuntu Mirror [Not Working Now]', link: 'https://launchpad.net/ubuntu/+mirror/mirror.imnyang.xyz-release' },
  { date: '2024-03-24', description: '내 목소리로 AI Cover 만들기', category: "Project", link: 'https://colab.research.google.com/drive/1a4G4hD9huBeGRZhEL2HNDMpqSuf4y61k?usp=sharing' },
  { date: '2023-12-20', description: 'LG AI 청소년 캠프 1기 합격', category: "Education" },
  { date: '2023-11-14', description: '인천상정중학교 2023학년도 SW 문제 해결 활동 우수상(2위) 수여', category: "Award" },
  { date: '2023-11-01', description: '블로그 시작', link: 'https://blog.imnyang.xyz', category: "Project" },
  { date: '2023-09-02', description: '선린인터넷고등학교 제6회 소프트웨어나늠축제 Layer7 부서 과정 이수' },
  { date: '2023-07-24', description: '한국정보기술연구원이 주도하는 사이버 가디언즈 보안캠프 수료' },
  { date: '2023-05-15', description: '한국 코드페어 예선 진출' },
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
  const [imageSrc, setImageSrc] = useState("https://f.imnyang.xyz/profile/imnyang.webp");
  const [gotoHref, setGotoHref] = useState("/");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

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
          .avatar:hover {
            animation: rotate 1ms linear infinite;
          }
        `;
        document.head.appendChild(style);
      }
    };

    updateImageSrc();
  }, []);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // 초기화 시점에 호출
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  interface SocialLinkProps {
    href: string;
    icon: string;
    tooltip: string;
  }

  const SocialLink = ({ href, icon, tooltip }: SocialLinkProps) => (
    <Tooltip content={tooltip} openDelay={100} positioning={{placement: "bottom"}}>
      <Link
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
      </Link>
    </Tooltip>
  );

  const [value, setValue] = useState(["about"])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="main">
        <div className="profile flex flex-col items-center gap-4 mt-10 mb-10">
          <Image src={imageSrc} width={128} height={128} className="rounded-full avatar" alt="Profile" priority />
          <h1 className="text-white text-2xl font-bold">hyun._.suk</h1>
          <p>Team. <Link href="https://sqlare.com">Sqlare</Link> & <Link href="https://github.com/objectiveTM">Objective</Link></p>
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
          <Stack width="full" maxW="450px" mx="auto">
            <AccordionRoot multiple collapsible value={value} onValueChange={(e) => setValue(e.value)}>
              {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionItemTrigger style={{ marginBottom: "0.5rem" }}>
                    <Icon fontSize="lg" color="fg.subtle">
                      {item.icon}
                    </Icon>
                    {item.title}
                  </AccordionItemTrigger>
                  <AccordionItemContent maxH="250px" overflow="auto">{item.content}</AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </Stack>
      </div>
    </Suspense>
  );
}

const items = [
  {
    value: "about",
    icon: <Heart />,
    title: "About",
    content:
      "안녕하세요. imnyang이라는 닉네임으로 활동중인 남현석입니다.\n",
  },
  {
    "value": "project",
    "icon": <ChartBar />,
    "title": "Project",
    "content": 
    <div className="flex flex-col text-sky-300">
      <p className="text-white">imnyang</p>
      <Link href={"https://instagram.com/today.isangjeong"}>오늘 인천 상정중학교</Link>
      <Link href={"https://time.imnyang.xyz"}>Local Time</Link>
      <Link href={"https://github.com/imnyang/siru"}>Siru</Link>
      <Link href={"https://github.com/imnyang/discord-voice-rec"}>Discord Voice Recorder</Link>
      <br />
      <p className="text-white">Sqlare</p>
      <Link href={"https://github.com/sqlare/sqlr.kr/tree/main"}>sqlr.kr (sqlite)</Link>
    </div>
  },
  {
    value: "timeline",
    icon: <ChartBar />,
    title: "Timeline",
    content: 
    <div className="timeline text-white">
      {events.map((event, index) => (
        <div key={index} className="flex flex-col gap-2 mb-3">
          <p className="tabular-nums text-base text-gray-400">{event.date}</p>
          <div className="flex items-center">
            {event.link && (
              <Link href={event.link} className="flex gap-2 text-base">
                <span className="text-base">{event.description}</span>
                <LinkIcon width={18} />
              </Link>)
            }
            {!event.link && <span className="text-base">{event.description}</span>}
          </div>
        </div>
      ))}
    </div>,
  },
]