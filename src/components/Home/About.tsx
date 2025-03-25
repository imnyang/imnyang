import { useEffect, useState } from "react";

export default function About() {
    const [time, setTime] = useState<string>("");
    const [post, setPost] = useState<any>({});
    const [age, setAge] = useState<number>(0);

    useEffect(() => {
        // Calculate age based on reference date (2010-11-08)
        const referenceDate = new Date(2010, 11, 8); // November is 10 because months are 0-indexed
        const currentDate = new Date();
        let calculatedAge = currentDate.getFullYear() - referenceDate.getFullYear();
        if (currentDate < new Date(currentDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate())) {
            calculatedAge -= 1;
        }
        setAge(calculatedAge);
    }, []);

    useEffect(() => {
        fetch("https://api.imnya.ng/rss", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setPost(data[0] || {});
                } else {
                    console.error("Error: data is undefined");
                }
            })
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Seoul', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 }));
        }, 1);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
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
                      <p>저는 항상 제가 할 수 있는 최적의 코드를 목표로 하며</p>
                      <p>사용자의 경험을 중심적으로 고려하며</p>
                      <p>새로운 기술에 대한 관심이 높습니다.</p>
                      
                      <h1 className="mt-4 text-foreground">In South Korea : <span className="tnum text-muted-foreground">{time}</span></h1>
                      <h1 className="text-foreground">최근 블로그 보기 : <a href={post.link} className="text-muted-foreground">{post.title}</a></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
