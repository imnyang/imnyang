import { Link } from "react-router";
import { Link as LinkIcon } from "lucide-react";

const events = [
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
    category: "Award",
    link: "https://ctf.hackingcamp.org/",
  },
  {
    date: "2024-08-05",
    description: "29회 해킹캠프 선발",
    category: "Conference",
    link: "https://hackingcamp.org/",
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
    category: "Award",
    link: "https://lgaiyouthcamp.or.kr/",
  },
  {
    date: "2024-04-22",
    description: "@isangjeong.today (인천상정중학교의 오늘 급식)",
    category: "Project",
    link: "https://www.instagram.com/isangjeong.today/",
  },
  {
    date: "2024-03-24",
    description: "Dreamhack #133",
    link: "https://dreamhack.io/users/40116/wargame",
  },
  {
    date: "2024-03-24",
    description: "Ubuntu Mirror [Not Working Now]",
    link: "https://launchpad.net/ubuntu/+mirror/mirror.imnyang.xyz-release",
  },
  {
    date: "2024-03-24",
    description: "내 목소리로 AI Cover 만들기",
    category: "Project",
    link: "https://colab.research.google.com/drive/1a4G4hD9huBeGRZhEL2HNDMpqSuf4y61k?usp=sharing",
  },
  {
    date: "2023-12-20",
    description: "LG AI 청소년 캠프 1기 합격",
    category: "Education",
  },
  {
    date: "2023-11-14",
    description: "인천상정중학교 2023학년도 SW 문제 해결 활동 우수상(2위) 수여",
    category: "Award",
  },
  {
    date: "2023-11-01",
    description: "블로그 시작",
    link: "https://blog.imnyang.xyz",
    category: "Project",
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

export default function TimelineComponents() {
  return (
    <div className="timeline text-white text-left">
      {events.map((event, index) => (
        <div key={index} className="flex flex-col gap-2 mb-3">
          <p className="tabular-nums text-base text-gray-400">{event.date}</p>
          <div className="flex items-center">
            {event.link && (
              <Link to={event.link} className="flex gap-2 text-base">
                <span className="text-base">{event.description}</span>
                <LinkIcon width={18} />
              </Link>
            )}
            {!event.link && (
              <span className="text-base">{event.description}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
