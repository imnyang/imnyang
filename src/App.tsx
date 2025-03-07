import { useEffect } from "react";
import Top from "@/components/Home/Top";
import About from "@/components/Home/About";
import Timeline from "@/components/Home/Timeline";
import Contact from "@/components/Home/Contact";
import Project from "@/components/Home/Project";

import "./index.css";

export function App() {
    useEffect(() => {
        // img 위에서 스크롤 방지
        const handleWheel = (event) => {
            if (event.target.tagName.toLowerCase() === "img") {
                event.preventDefault();
            }
        };

        document.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            document.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div id="fullpage" className="bg-background text-foreground w-full">
            <div id="top" className="section">
                <Top />
            </div>
            <div id="about" className="section">
                <About />
            </div>
            <div id="project" className="section">
                <Project />
            </div>
            <div id="timeline" className="section">
                <Timeline />
            </div>
            <div id="contact" className="section">
                <Contact />
            </div>
        </div>
    );
}
