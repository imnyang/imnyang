import "../link.css";
import { useState, useEffect } from "react";
import Image from "@/profile.avif";
import Timeline from "@/components/TimeLine";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Seperator from "@/components/Seperator";

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
		const referenceDate = new Date(2010, 11, 8);
		const currentDate = new Date();
		let calculatedAge = currentDate.getFullYear() - referenceDate.getFullYear();
		
		if (currentDate < new Date(currentDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate())) {
			calculatedAge -= 1;
		}
		
		setAge(calculatedAge);
	}, []);

	useEffect(() => {
		// 블로그 데이터 가져오기
		const fetchBlogData = async () => {
			try {
				const response = await fetch("https://api.imnya.ng/rss");
				const data = await response.json();
				if (data) {
					setPost(data[0] || {});
				}
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};

		fetchBlogData();
	}, []);

	return (
		<div className="flex flex-col justify-center font-medium">
			<div className="max-w-3xl px-4 mx-auto pt-24 pb-12 leading-8">
				<header className="mb-6">
					<h1 className="mb-4">
						<a 
							href="mailto:me@imnya.ng" 
							className="text-5xl font-medium font-serif font-ntype hover:opacity-80 transition-opacity"
						>
							me@imnya.ng
						</a>
					</h1>
				</header>

				<section className="mb-8 space-y-4">
					<p className="font-medium">
						항상 <span className="font-extrabold">새로운 것</span>을 찾고 삶을 더{" "}
						<span className="font-extrabold">간단명료</span>하게 만들고 있는 학생 개발자{" "}
						<span className="font-extrabold">남현석</span>입니다.
					</p>

					<p className="font-medium">
						만든 것들은{" "}
						<a 
							className="link-pink" 
							target="_blank" 
							href="https://github.com/team-neko/two_hearts" 
							title="Chrome New Tab Extension"
							rel="noopener noreferrer"
						>
							Two Hearts
						</a>
						,{" "}
						<a 
							className="link-amber" 
							target="_blank" 
							href="https://instagram.com/today.isangjeong" 
							title="Post meal in Instagram"
							rel="noopener noreferrer"
						>
							오늘 인천상정중학교
						</a>
						,{" "}
						<a 
							className="link-emerald" 
							target="_blank" 
							href="https://github.com/team-neko/dynamic-kawaii" 
							title="Dark Pink VSCode Theme"
							rel="noopener noreferrer"
						>
							Dynamic Kawaii
						</a>{" "}
						이런 것들이 있습니다.
					</p>
				</section>

				<figure className="my-8">
					<picture className="block bg-gray-100 rounded-xl aspect-3-2 overflow-hidden image-scale object-shadowed">
						<img 
							src={Image} 
							className="w-full aspect-3-2 object-cover object-center transition-transform duration-300 hover:scale-105" 
							alt="프로필 이미지"
						/>
					</picture>
				</figure>

				<section className="mb-8 space-y-4">
					<p className="font-medium">
						{age}살의 어린 나이지만, 저는 항상{" "}
						<span className="font-extrabold">최적의 코드</span>를 목표로 하며,
						<br />
						<span className="font-extrabold">사용자 경험</span>을 중심적으로 고민합니다.
						<br />
						또한 <span className="font-extrabold">새로운 기술</span>에 대한 관심이 높습니다.
					</p>

					<p className="font-medium">
						초등학교 시절 <span className="font-extrabold">운영체제</span>에 흥미를 느껴 컴퓨터를 시작했고,
						이후 <span className="font-extrabold">프로그래밍</span>에 관심을 갖게 되었습니다.
						<br />
						초등학교 4학년 때 <span className="font-extrabold">Python</span>으로 프로그래밍을 시작했으며,
						현재는 <span className="font-extrabold">TypeScript</span>를 주로 사용합니다.
						<br />
						최근에는 정보보안 분야 중 <span className="font-extrabold">웹 해킹</span>에 관심이 많습니다.
					</p>
				</section>

				<section className="my-8">
					<div className="flex flex-row items-center justify-center p-6 bg-muted rounded-xl shadow-lg">
						<img
							loading="lazy"
							decoding="async"
							src="https://skillicons.dev/icons?i=typescript,js,c,cpp,rust,go,java,kotlin,py,html,css,php,react,remix,nextjs,tailwind,tauri,bun,elysia,mongodb,postgres,sqlite,docker,nginx,github,githubactions,git,arduino,raspberrypi,bots"
							className="w-full max-w-3xl rounded-lg object-contain select-none pointer-events-none transition-transform duration-300 hover:scale-105"
							alt="기술 스택"
							title="기술 스택"
							width={800}
						/>
					</div>
				</section>

				{post.title && (
					<section className="mb-8">
						<p className="font-medium">
							최근 블로그 글:{" "}
							<a 
								href={post.link} 
								className="text-muted-foreground hover:text-foreground transition-colors underline decoration-dashed underline-offset-4"
								target="_blank"
								rel="noopener noreferrer"
							>
								{post.title}
							</a>
						</p>
					</section>
				)}

				<Seperator />
				<Projects />
				<Seperator />
				<Timeline />
				<Seperator />
				<Contact />
			</div>
		</div>
	);
}
