import { useState, useEffect } from "react";
import { Send, AlignJustify, BadgeCheck, House, CircleHelp, ChartGantt, PhoneCall } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function BottomBar() {
    const [email, setEmail] = useState<string>('me@imnya.ng');
    const [hash, setHash] = useState<string>(window.location.hash);

    useEffect(() => {
        const emaillist = ['me', 'mail', 'not', 'cat', 'neko', 'meow', 'heart']
        const domainlist = ['imnya.ng', 'al-1s.kr']
    
        // furry is 0.001%
        const randomEmail = () => {
            const random = Math.floor(Math.random() * 1000);
            if (random === 0) {
                setEmail(`furry@${domainlist[Math.floor(Math.random() * domainlist.length)]}`); 
            }
            else {
                setEmail(`${emaillist[Math.floor(Math.random() * emaillist.length)]}@${domainlist[Math.floor(Math.random() * domainlist.length)]}`);
            }
        }
        randomEmail();

        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);


    return (
        <div className="w-full flex justify-center fixed bottom-0 z-50">
            <header className="bg-background/75 text-foreground w-full md:w-[50%] h-12 border rounded-full select-none m-4 mt-2">
                <div className="flex items-center justify-between w-full h-full py-4 px-8">
                    <a href={`mailto:${email}`} className="flex flex-row gap-4"><Send width={16} /> {email}</a>
                    <div>
                        <button onClick={() => window.location.hash = "#top"} accessKey="1" className="w-[0px] h-[0px] text-[0px] text-background"></button>
                        <button onClick={() => window.location.hash = "#about"} accessKey="2" className="w-[0px] h-[0px] text-[0px] text-background"></button>
                        <button onClick={() => window.location.hash = "#project"} accessKey="3" className="w-[0px] h-[0px] text-[0px] text-background"></button>
                        <button onClick={() => window.location.hash = "#timeline"} accessKey="4" className="w-[0px] h-[0px] text-[0px] text-background"></button>
                        <button onClick={() => window.location.hash = "#contact"} accessKey="5" className="w-[0px] h-[0px] text-[0px] text-background"></button>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button><AlignJustify /></button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <a href="#top" className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2 items-center justify-between h-4">
                                            {hash === "#top" ? (
                                                <BadgeCheck width={16} height={16} />
                                            ) : (
                                                <House width={16} height={16} />
                                            )}
                                            Home
                                        </div>

                                        <p className="text-muted-foreground">Alt + 1</p>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="#about" className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2 items-center justify-between h-4">
                                            {hash === "#about" ? (
                                                <BadgeCheck width={16} height={16} />
                                            ) : (
                                                <CircleHelp width={16} height={16} />
                                            )}
                                            About
                                        </div>

                                        <p className="text-muted-foreground">Alt + 2</p>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="#project" className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2 items-center justify-between h-4">
                                            {hash === "#project" ? (
                                                <BadgeCheck width={16} height={16} />
                                            ) : (
                                                <ChartGantt width={16} height={16} />
                                            )}
                                            Project
                                        </div>

                                        <p className="text-muted-foreground">Alt + 3</p>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="#timeline" className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2 items-center justify-between h-4">
                                            {hash === "#timeline" ? (
                                                <BadgeCheck width={16} height={16} />
                                            ) : (
                                                <ChartGantt width={16} height={16} />
                                            )}
                                            Timeline
                                        </div>

                                        <p className="text-muted-foreground">Alt + 4</p>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="#contact" className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2 items-center justify-between h-4">
                                            {hash === "#contact" ? (
                                                <BadgeCheck width={16} height={16} />
                                            ) : (
                                                <PhoneCall width={16} height={16} />
                                            )}
                                            Contact
                                        </div>

                                        <p className="text-muted-foreground">Alt + 5</p>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel>© 2021-2025 imnyang</DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
        </div>
    )
}