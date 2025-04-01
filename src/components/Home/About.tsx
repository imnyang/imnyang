import { useEffect, useRef, useState } from "react";

export default function About() {
    const [wakatime, setWakatime] = useState<any>();
    const [time, setTime] = useState<number>(0);
    const [post, setPost] = useState<any>({});
    const [age, setAge] = useState<number>(0);
    const [totalSeconds, setTotalSeconds] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const AboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 나이 계산
        const referenceDate = new Date(2010, 10, 8); // 2010년 11월 8일 (0-indexed)
        const currentDate = new Date();
        let calculatedAge = currentDate.getFullYear() - referenceDate.getFullYear();
        if (currentDate < new Date(currentDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate())) {
            calculatedAge -= 1;
        }
        setAge(calculatedAge);
    }, []);

    useEffect(() => {
        // 블로그 데이터 가져오기
        fetch("https://api.imnya.ng/rss")
            .then(response => response.json())
            .then(data => {
                if (data) setPost(data[0] || {});
            })
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    useEffect(() => {
        // Intersection Observer로 isVisible 상태 변경
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (AboutRef.current) observer.observe(AboutRef.current);

        return () => {
            if (AboutRef.current) observer.unobserve(AboutRef.current);
        };
    }, []);

    useEffect(() => {
        // Wakatime 데이터 가져오기 (한 번만 실행)
        fetch("https://api.imnya.ng/wakatime")
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const roundedSeconds = Math.round(data.data.total_seconds); // 반올림
                    setTotalSeconds(roundedSeconds);
                    setWakatime(data.data);
                }
            })
            .catch(error => console.error("Error fetching Wakatime data:", error));
    }, []);

    useEffect(() => {
        // isVisible이 true일 때 time 증가
        if (isVisible && time < totalSeconds) {
            const timer = setTimeout(() => setTime(prevTime => prevTime + 1), time === 0 ? 300 : 0);
            return () => clearTimeout(timer);
        }
    }, [isVisible, time, totalSeconds]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center" ref={AboutRef}>
            <div className="w-full md:w-[50%] p-4">
                <h1 className="text-2xl font-bold">🤔 About</h1>
                <div className="flex items-start justify-center flex-col p-2 mt-2 w-full">
                    <div className="flex flex-col font-light text-2xl">
                        <h1>항상 <strong className="font-black">새로운 것</strong>을 찾고</h1>
                        <h1>삶을 더 <strong className="font-black">간단명료</strong>하게 만들고 있는</h1>
                        <h1>학생 개발자 <strong className="font-black">남현석</strong>입니다.</h1>
                    </div>

                    <div className="mt-8">
                        <p>{age}살의 어린 나이지만</p>
                        <p>저는 항상 제가 할 수 있는 최적의 코드를 목표로 하고</p>
                        <p>사용자의 경험을 중심적으로 고려하며</p>
                        <p>새로운 기술에 대한 관심이 높습니다.</p>

                        <br/>

                        <a className="mt-4 text-foreground" href="https://wakatime.com/@imnyang" target="_blank" rel="noopener noreferrer">
                            Wakatime Mar 18th ~ : <span className="tnum text-muted-foreground">{time}</span>s
                        </a>
                        <h1 className="text-foreground">
                            최근 블로그 보기 : <a href={post.link} className="text-muted-foreground">{post.title}</a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
