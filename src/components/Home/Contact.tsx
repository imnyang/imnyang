import { Github, Instagram, Rss } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-[50%] p-4 flex items-center justify-center flex-col gap-4">
        <div className="flex items-center justify-center gap-4 flex-row">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/imnyang"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row gap-4"
                >
                  <Github />
                </a>
              </TooltipTrigger>
              <TooltipContent className="px-2 py-1 text-xs">
                Github
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://x.com/imnya_ng"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row gap-4 text-3xl"
                >
                  𝕏
                </a>
              </TooltipTrigger>
              <TooltipContent className="px-2 py-1 text-xs">𝕏</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://instagram.com/loopback.ip"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row gap-4"
                >
                  <Instagram />
                </a>
              </TooltipTrigger>
              <TooltipContent className="px-2 py-1 text-xs">
                Instagram
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://blog.imnya.ng"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row gap-4"
                >
                  <Rss />
                </a>
              </TooltipTrigger>
              <TooltipContent className="px-2 py-1 text-xs">
                Blog
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center">
          <p>Github</p>
          <Button
            variant="secondary"
            size="sm"
          >
            <a href="https://github.com/sponsors/imnyang" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
              <span>💕</span>
              <span>Sponsor</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
