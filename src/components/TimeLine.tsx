import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const events = [
  {
    date: "2025-02-27",
    description:
      "화이트햇스쿨 3기 최종합격",
    category: "Education",
    link: "https://whitehatschool.kr/home/kor/main.do"
  },
  {
    date: "2025-01-19",
    description:
      "2024 Sunrin LOGCON(TeamLog 주최) 중등부 3위",
    category: "Award",
    link: "https://teamlog.kr"
  },
  {
    date: "2025-01-12",
    description:
      "2024 Sunrin Layer7 CTF 중등부 2위",
    category: "Award",
    link: "https://layer7.kr"  
  },
  {
    date: "2025-01-10",
    description:
      "선린인터넷고 중학생 특별교육 이수",
    category: "Education",
    link: "https://sunrint.sen.hs.kr/"  
  },
  {
    date: "2024-12-14",
    description:
      "2024 글로벌스타트업학교 K-청소년스타트업 경진대회 우수상 수상",
    category: "Award",
    link: "https://www.ncf.or.kr/projects/'2024-%EA%B8%80%EB%A1%9C%EB%B2%8C%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%ED%95%99%EA%B5%90-k-%EC%B2%AD%EC%86%8C%EB%85%84%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C'-%EC%B0%B8%EA%B0%80%EC%9E%90-%EB%AA%A8%EC%A7%91",
  },
  {
    date: "2024-12-07",
    description: "글로벌 스타트업 학교 팀 1위",
    category: "Award",
    link: "https://ncf.or.kr",
  },
  {
    date: "2024-12-07",
    description: "글로벌 스타트업 학교 개인 최우수상",
    category: "Award",
    link: "https://ncf.or.kr",
  },
  {
    date: "2024-08-18",
    description: "29회 해킹캠프 CTF 1위 (고민중독)",
    category: "Award & Conference",
    link: "https://ctf.hackingcamp.org/",
  },
  {
    date: "2024-08-01",
    description:
      "글로벌 스타트업 학교 2기 베트남 해외 연수 데모데이 대상 (1위)",
    category: "Award",
    link: "http://ncf.or.kr",
  },
  {
    date: "2024-05-16",
    description: "글로벌 스타트업 학교 2기 합격",
    category: "Education",
    link: "http://ncf.or.kr",
  },
  {
    date: "2024-05-11",
    description: "LG AI 청소년 캠프 1기 LG 탐색상 수상",
    category: "Award",
    link: "https://lgaiyouthcamp.or.kr/",
  },
  {
    date: "2024-05-11",
    description: "LG AI 청소년 캠프 1기 수료",
    category: "Award & Education",
    link: "https://lgaiyouthcamp.or.kr/",
  },
  {
    date: "2023-11-14",
    description: "인천상정중학교 2023학년도 SW 문제 해결 활동 우수상(2위) 수여",
    category: "Award",
  },
  {
    date: "2023-09-02",
    description:
      "선린인터넷고등학교 제6회 소프트웨어나눔축제 Layer7 부서 과정 이수",
    category: "Education",
  },
  {
    date: "2023-07-24",
    description: "한국정보기술연구원이 주도하는 사이버 가디언즈 보안캠프 수료",
    category: "Education",
  },
  {
    date: "2023-05-15",
    description: "한국 코드페어 예선 진출",
    category: "Award",
  },
  {
    date: "2022-12-20",
    description: "2022 SW영재 창작대회 은상 수상",
    category: "Award",
  },
  {
    date: "2022-09-27",
    description: "2022 삼성 주니어 SW 창작대회 본선 진출",
    category: "Award",
  },
  {
    date: "2022-05-23",
    description: "2022학년도 석정초SW영재학급 첫 수업",
    category: "Education",
  },
  {
    date: "2022-07-26",
    description: "제 14회 맑은하늘 맑은웃음 공모전에서 맑은웃음상 수여",
    category: "Award",
  },
  {
    date: "2021-11-14",
    description: "Become a ZEPETO Creator 이수",
    category: "Education",
  },
  {
    date: "2021-05-19",
    description:
      "소프트웨어와 전자신문이 주관한 소프트웨어재단 꿈찾기 캠프 이수",
    category: "Education",
  },
  {
    date: "2018-01-27",
    description:
      "제4회 맑은하늘 맑은웃음 어린이 문예공모전에서 위닉스상(2위) 수여",
    category: "Award",
  },
];

export default function Timeline() {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const TimelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
              }
          },
          { threshold: 0.1 }
      );

      if (TimelineRef.current) {
          observer.observe(TimelineRef.current);
      }

      return () => {
          if (TimelineRef.current) {
              observer.unobserve(TimelineRef.current);
          }
      };
  }, []);

  useEffect(() => {
      if (isVisible && count < events.length) {
          const timer = setTimeout(() => setCount(count + 1), count === 0 ? 300 : 25);
          return () => clearTimeout(timer);
      }
  }, [isVisible, count]);

  return (
    <div ref={TimelineRef} className="w-full flex flex-col items-center justify-center mt-8">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 w-full">🌠 수상 및 교육</h1>
        <p>현재까지 {count}개의 개성있는 조각들이 모였어요!</p>
        <br/>
        <Accordion type="multiple" className="w-full space-y-2">
          {Array.from(new Set(events.map(event => new Date(event.date).getFullYear()))).sort((a, b) => b - a).map(year => (
            <AccordionItem
              value={year.toString()}
              key={year}
              className="rounded-lg border bg-background px-4 py-1"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  {year}
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 ps-7 text-foreground overflow-y-auto">
                {events.filter(event => new Date(event.date).getFullYear() === year).map((event, index) => (
                  <div key={index} className="my-2">
                    <p className="flex flex-row"><p className="text-md font-semibold fixed-width-number">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}</p><p className="text-md font-semibold fixed-width-number text-muted-foreground">ㆍ{event.category}</p></p>
                    {event.link ? (
                      <a href={event.link}>{event.description}</a>
                    ) : (
                      <span>{event.description}</span>
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
