import { useState, useEffect } from "react";
import { Send, AlignJustify, BadgeCheck, House, CircleHelp, ChartGantt, PhoneCall } from "lucide-react";
import { Link, useLocation } from "react-router";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function BottomBar() {
    const location = useLocation();

    const [email, setEmail] = useState<string>('me@imnya.ng');

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
    }, []);

    return (
        <div className="w-full flex justify-center fixed bottom-0 z-50">
            <header className="bg-background/75 text-foreground w-full md:w-[50%] h-12 border rounded-full select-none m-4 mt-2">
                <div className="flex items-center justify-between w-full h-full py-4 px-8">
                    <Link to={`mailto:${email}`} className="flex flex-row gap-4"><Send width={16} /> {email}</Link>
                    <div className="flex flex-row items-center justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button><AlignJustify /></button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <div className="flex flex-row gap-2 items-center">
                                        {location.hash === "#top" ? (
                                            <BadgeCheck />
                                        ) : (
                                            <House />
                                        )}
                                        <Link to="/#top">Home</Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <div className="flex flex-row gap-2 items-center">
                                        {location.hash === "#top" ? (
                                            <BadgeCheck />
                                        ) : (
                                            <CircleHelp />
                                        )}
                                        <Link to="/#about">About</Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <div className="flex flex-row gap-2 items-center">
                                        {location.hash === "#top" ? (
                                            <BadgeCheck />
                                        ) : (
                                            <ChartGantt />
                                        )}
                                        <Link to="/#timeline">Timeline</Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <div className="flex flex-row gap-2 items-center">
                                        {location.hash === "#top" ? (
                                            <BadgeCheck />
                                        ) : (
                                            <PhoneCall />
                                        )}
                                        <Link to="/#contact">Contact</Link>
                                    </div>
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