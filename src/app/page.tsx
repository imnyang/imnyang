import "../link.css";
import { useState, useEffect } from "react";
import Image from "@/profile.avif";
import Timeline from "@/components/TimeLine";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export function Page() {
	const [age, setAge] = useState<number>(0);
	const [post, setPost] = useState<any>({});

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }
            }
        };
        scrollToHash();
	}, []);

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

	return (
		<div className="flex flex-col justify-center font-medium">
			<div className="max-w-3xl px-4 mx-auto pt-24 pb-12 leading-8">
				<h1 className="mb-4"><a href="mailto:me@imnya.ng" className="text-5xl font-medium font-serif font-ntype">me@imnya.ng</a></h1>

				<p className="font-medium">
					항상 <span className="font-extrabold">새로운 것</span>을 찾고 삶을 더 <span className="font-extrabold">간단명료</span>하게 만들고 있는 학생 개발자 <span className="font-extrabold">남현석</span>입니다.
				</p>

				<p className="font-medium">
					만든 것들은{" "}
					<a className="link-pink" target="_blank" href="https://github.com/team-neko/two_hearts" title="Chrome New Tab Extension">
						Two Hearts
					</a>,{" "}
					<a className="link-amber" target="_blank" href="https://instagram.com/today.isangjeong" title="Post meal in Instagram">
						오늘 인천상정중학교
					</a>,{" "}
					<a className="link-emerald" target="_blank" href="https://github.com/team-neko/dynamic-kawaii" title="Dark Pink VSCode Theme">
						Dynamic Kawaii
					</a> 이런 것들이 있습니다.
				</p>
				<picture className="block bg-gray-100 my-4 rounded-xl aspect-3-2 overflow-hidden image-scale object-shadowed">
					<img src={Image} className="w-full aspect-3-2 object-cover object-center" />
				</picture>
				<p className="mt-6 font-medium">
					{age}살의 어린 나이지만, 저는 항상 <span className="font-extrabold">최적의 코드</span>를 목표로 하며,<br />
					<span className="font-extrabold">사용자 경험</span>을 중심적으로 고민합니다.<br />
					또한 <span className="font-extrabold">새로운 기술</span>에 대한 관심이 높습니다.
				</p>
				<p className="mt-2 font-medium">
					초등학교 시절 <span className="font-extrabold">운영체제</span>에 흥미를 느껴 컴퓨터를 시작했고,
					이후 <span className="font-extrabold">프로그래밍</span>에 관심을 갖게 되었습니다.<br />
					초등학교 4학년 때 <span className="font-extrabold">Python</span>으로 프로그래밍을 시작했으며,
					현재는 <span className="font-extrabold">TypeScript</span>를 주로 사용합니다.<br />
					최근에는 정보보안 분야 중 <span className="font-extrabold">웹 해킹</span>에 관심이 많습니다.
				</p>

				<div className="flex flex-row items-center justify-center p-4 bg-muted rounded-xl shadow-md mt-6">
					<img
						loading="lazy"
						decoding="async"
						src="https://skillicons.dev/icons?i=typescript,js,c,cpp,rust,go,java,kotlin,py,html,css,php,react,remix,nextjs,tailwind,tauri,bun,elysia,mongodb,postgres,sqlite,docker,nginx,github,githubactions,git,arduino,raspberrypi,bots"
						className="w-full max-w-3xl rounded-lg object-contain select-none pointer-events-none transition-transform duration-200 hover:scale-105"
						alt="기술 스택"
						title="기술 스택"
						width={800}
					/>
				</div>

				<br />

				<p className="font-medium">
					최근 블로그 글 :{" "}
					<a href={post.link} className="text-muted-foreground">
						{post.title}
					</a>
				</p>

				<div className="border-t-1 border-muted rounded-full my-4" />

				<Projects />

				<div className="border-t-1 border-muted rounded-full mt-8" />


				<Timeline />
				<div className="border-t-1 border-muted rounded-full mt-8" />

				<Contact />
			</div>
		</div>
	);
}
