import { useState, useEffect } from "react";
import { Send, AlignJustify, BadgeCheck, House, CircleHelp, ChartGantt, PhoneCall } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BottomBar() {
    const [email, setEmail] = useState<string>('me@imnya.ng');
    const [hash, setHash] = useState<string>(window.location.hash);
    const [accessKeyCombo, setAccessKeyCombo] = useState<string>("Alt");

    useEffect(() => {
        const emaillist = ['me', 'mail', 'not', 'cat', 'neko', 'meow', 'heart'];
        const domainlist = ['imnya.ng', 'al-1s.kr'];
    
        const randomEmail = () => {
            const random = Math.floor(Math.random() * 1000);
            if (random === 0) {
                setEmail(`furry@${domainlist[Math.floor(Math.random() * domainlist.length)]}`); 
            } else {
                setEmail(`${emaillist[Math.floor(Math.random() * emaillist.length)]}@${domainlist[Math.floor(Math.random() * domainlist.length)]}`);
            }
        };
        randomEmail();

        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        const ua = navigator.userAgent;
        let keyCombo = "Alt";
        
        if (/Mac/i.test(ua)) {
            keyCombo = "Control + Option";
        } else if (/Linux/i.test(ua)) {
            keyCombo = "Alt";
            if (/Firefox/i.test(ua)) {
                keyCombo = "Alt + Shift";
            }
        } else if (/Windows/i.test(ua)) {
            if (/Firefox/i.test(ua)) {
                keyCombo = "Alt + Shift";
            }
        }

        setAccessKeyCombo(keyCombo);
    }, []);

    return (
        <div className="w-full flex justify-center fixed bottom-0 z-50">
            <header className="bg-background/75 text-foreground w-full md:w-[50%] h-12 border rounded-full select-none m-4 mt-2">
                <div className="flex items-center justify-between w-full h-full py-4 px-8">
                    <a href={`mailto:${email}`} className="flex flex-row gap-4"><Send width={16} /> {email}</a>
                    <div>
                        {["top", "about", "project", "timeline", "contact"].map((section, index) => (
                            <button 
                                key={section}
                                onClick={() => window.location.hash = `#${section}`}
                                accessKey={(index + 1).toString()}
                                className="w-[0px] h-[0px] text-[0px] text-background"
                            ></button>
                        ))}
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button><AlignJustify /></button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {["top", "about", "project", "timeline", "contact"].map((section, index) => {
                                    const icons = [House, CircleHelp, ChartGantt, ChartGantt, PhoneCall];
                                    const Icon = icons[index];
                                    return (
                                        <DropdownMenuItem asChild key={section}>
                                            <a href={`#${section}`} className="flex flex-row items-center justify-between">
                                                <div className="flex flex-row gap-2 items-center justify-between h-4">
                                                    {hash === `#${section}` ? (
                                                        <BadgeCheck width={16} height={16} />
                                                    ) : (
                                                        <Icon width={16} height={16} />
                                                    )}
                                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                                </div>
                                                <p className="text-muted-foreground">{accessKeyCombo} + {index + 1}</p>
                                            </a>
                                        </DropdownMenuItem>
                                    );
                                })}
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel>© 2021-2025 imnyang</DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
        </div>
    );
}
