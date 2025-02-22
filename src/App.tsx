import { useEffect } from 'react';
import Top from "@/components/Home/Top";
import About from "@/components/Home/About";
import Timeline from "@/components/Home/Timeline";
import Contact from '@/components/Home/Contact';
import Project from '@/components/Home/Project';

import './index.css';

export function App() {
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
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
