import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function About() {
    const [time, setTime] = useState<string>("");
    const [post, setPost] = useState<any>({});

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
                    <div className="flex flex-col font-semibold text-xl">
                        <h1>항상 <strong className="font-black">새로운 것</strong>을 찾는</h1>
                        <h1>학생 개발자 남현석입니다.</h1>
                    </div>

                    <br />

                    <h1>In South Korea : <span className="tnum">{time}</span></h1>
                    <h1>최근 블로그 보기 : <a href={post.link}>{post.title}</a></h1>
                </div>
            </div>

        </div>
    );
}