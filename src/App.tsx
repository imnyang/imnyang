import { useEffect } from 'react';
import Top from "@/components/Home/Top";
import About from "@/components/Home/About";
import Timeline from "@/components/Home/Timeline";
import Contact from '@/components/Home/Contact';
import Project from '@/components/Home/Project';

import './index.css';

export function App() {
    useEffect(() => {
        // 초기 로드 시 hash에 맞게 스크롤
        const scrollToHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" });
                    }, 100); // 브라우저가 레이아웃을 그릴 시간을 줌
                }
            }
        };
        scrollToHash();

        // 스크롤 시 hash 업데이트 로직
        const sections = document.querySelectorAll(".section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        window.history.replaceState(null, "", `#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.6 } // 60% 보이면 활성화
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div id="fullpage" className="bg-background text-foreground w-full">
            <div id="top" className="bg-background text-foreground w-full h-screen flex items-center justify-center section">
                <Top />
            </div>
            <div id="about" className="bg-background text-foreground w-full h-screen flex items-center justify-center section">
                <About />
            </div>
            <div id="project" className="bg-background text-foreground w-full h-screen flex items-center justify-center section">
                <Project />
            </div>
            <div id="timeline" className="bg-background text-foreground w-full h-screen flex items-center justify-center section">
                <Timeline />
            </div>
            <div id="contact" className="bg-background text-foreground w-full h-screen flex items-center justify-center section">
                <Contact />
            </div>
        </div>
    );
}
