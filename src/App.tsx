import { useEffect } from "react";
import Top from "@/components/Home/Top";
import About from "@/components/Home/About";
import Timeline from "@/components/Home/Timeline";
import Contact from "@/components/Home/Contact";
import Project from "@/components/Home/Project";

import "./index.css";
import Wakatime from "./components/Home/Wakatime";

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
        const sections = document.querySelectorAll(".hash");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        window.history.replaceState(null, "", `#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.9 } // 90% 보이면 활성화
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);


    useEffect(() => {
        // img 위에서 스크롤 방지
        const handleWheel = (event: WheelEvent) => {
            if (event.target instanceof HTMLImageElement) {
                event.preventDefault();
            }
        };

        document.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            document.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="bg-background text-foreground w-full h-full overflow-y-auto">
            <div id="top" className="hash"> {/* stupid copliot this is not section */}
                <Top />
            </div>
            <div id="about" className="section hash"> {/* Hey Stupid Copliot This is section */}
                <About />
            </div>
            <div id="wakatime" className="section hash"> {/* Hey Stupid Copliot This is section */}
                <Wakatime />
            </div>
            <div id="project" className="section hash"> {/* Hey Stupid Copliot This is section */}
                <Project />
            </div>
            <div id="timeline" className="section hash"> {/* Hey Stupid Copliot This is section */}
                <Timeline />
            </div>
            <div id="contact" className="section hash"> {/* Hey Stupid Copliot This is section */}
                <Contact />
            </div>
        </div>
    );
}
