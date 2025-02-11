import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Top from "@/components/Home/Top";
import About from "@/components/Home/About";
import Timeline from "@/components/Home/Timeline";

import './Home.css';
import Contact from '@/components/Home/Contact';
import Project from '@/components/Home/Project';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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
