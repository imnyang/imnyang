import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function About() {
    const [posts, setPosts] = useState<any[]>([]);

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
                    setPosts(data.slice(0, 3));
                } else {
                    console.error("Error: data is undefined");
                }
            })
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="w-full md:w-[50%] p-4">
                <h1 className="text-2xl font-bold">🤔 About</h1>
                <p className="mt-2">안녕하세요! 저는 암냥이라는 이름으로 활동하고 있는 학생 개발자 남현석입니다.</p>
                <p>With <a href="https://sqlare.com">Sqlare</a>, <a href="https://team.orygonix.com">TEAM. ORYGON:IX</a></p>
            </div>
            <div className="w-full md:w-[50%] p-4">
                <strong>최근 블로그 글</strong>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>
                            <Link to={post.link}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
