import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";

export default function Top() {
    return (
        <div className="bg-background text-foreground w-full h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full md:w-[50%] h-full py-16 md:py-32">
                <div className="w-full md:w-[40%] h-full flex flex-col justify-center items-center md:items-end md:pr-16">
                    <div className="text-center md:text-right">
                        <h1 className="text-4xl font-bold">Nam<br/>HyunSuk</h1>
                        <p className="mt-4 text-xl">
                            암냥이라는 이름으로 활동하고 있는<br/> 학생 개발자 남현석라고 합니다.
                        </p>
                    </div>
                </div>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <div className="w-full md:w-[60%] h-full flex justify-center md:justify-end items-end bg-transparent md:bg-[#654e5c] rounded-3xl mt-8 md:mt-0 select-none">
                            <img 
                                src="https://f.imnya.ng/profile/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.avif"
                                className="w-[60%] max-w-[360px] select-none pointer-events-none"
                                title="Special Thanks to @dob2_"
                            />
                        </div>
                        </TooltipTrigger>
                        <TooltipContent align="end" side="bottom" className="px-2 py-1 text-xs">Special Thanks to @dob2_</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
}