/*
  All rights reserved to NY0510 (As Known As NY64), 2024
  https://github.com/NY0510/ny64.kr/blob/main/src/components/ProfileSection.tsx
*/

import { useState, useEffect } from 'react';
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

const birthday = new Date('2021-11-14');

export function TimeCounter() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)`;

  const [afterBirth, setAfterBirth] = useState<string>('');
  const [tenThousands, setTenThousands] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);
  

	useEffect(() => {
		const interval = setInterval(() => {
			const elapsed = new Date().getTime() - birthday.getTime();
			setAfterBirth(elapsed.toLocaleString());

			const newTenThousands = Math.floor(elapsed / 10000);
			if (newTenThousands !== tenThousands) {
				setTenThousands(newTenThousands);
				setAnimate(true);
				setTimeout(() => setAnimate(false), 200);
			}
		}, 1);

		return () => clearInterval(interval);
	}, [tenThousands]);

    return (
      <div
        onMouseMove={(e) => {
          const { left, top } = e.currentTarget.getBoundingClientRect();
  
          mouseX.set(e.clientX - left);
          mouseY.set(e.clientY - top);
        }}
        className="group relative w-full max-w-[350px] overflow-hidden rounded-xl bg-neutral-950"
        title='암냥으로 활동한지'
      >
        <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: background,
          }}
        />
        <div className="relative flexflex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
          <div className="space-y-2">
            <span>암냥 ~  </span>
            <p className={`text-sm tabular-nums transition duration-200 ease-in-out ${animate ? 'text-neutral-100' : 'text-neutral-400'}`}>
              {afterBirth} ms
            </p>
          </div>
        </div>
      </div>
    );

    /*
    return (
      <div className="group relative w-fit mx-auto grid overflow-hidden rounded-3xl px-6 py-3 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-3xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-px rounded-3xl bg-neutral-950 transition-colors duration-200" />
        <span className="z-10 flex flex-col items-center gap-2">
          <span>암냥으로 활동한지</span>
          <span className={`tabular-nums transition duration-200 ease-in-out ${animate ? 'text-neutral-100' : 'text-neutral-400'}`}>
            {afterBirth} ms
          </span>
        </span>
      </div>
    );*/
  }
  