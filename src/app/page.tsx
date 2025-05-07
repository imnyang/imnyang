import "../link.css";
import { useState, useEffect } from "react";
import Image from "@/profile.avif";
import Timeline from "@/components/TimeLine";
import Contact from "@/components/Contact";

export function Page() {
	const [age, setAge] = useState<number>(0);
	const [post, setPost] = useState<any>({});

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
		<div className="flex flex-col justify-center">
			<div className="max-w-3xl px-4 mx-auto pt-24 pb-12 leading-8">
				<h1 className="text-5xl font-medium font-serif font-ntype mb-4">imnya.ng</h1>

				<p>
					항상 <span className="font-extrabold">새로운 것</span>을 찾고 삶을 더 <span className="font-extrabold">간단명료</span>하게 만들고 있는 학생 개발자 <span className="font-extrabold">남현석</span>입니다.
				</p>

				<p>
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
				<p>
					{age}살의 어린 나이지만 저는 항상 <span className="font-extrabold">제가 할 수 있는 최적의 코드</span>를 목표로 하고{" "}
					<span className="font-extrabold">사용자의 경험을 중심적으로</span> 고려하며 <span className="font-extrabold">새로운 기술에 대한 관심</span>이 높습니다.
				</p>

				<br />

				<p>
					최근 블로그 글 :{" "}
					<a href={post.link} className="text-muted-foreground">
						{post.title}
					</a>
				</p>

				<Timeline />
				<Contact />
			</div>
		</div>
	);
}
