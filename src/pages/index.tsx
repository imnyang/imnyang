import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import avatar from "@/../public/profile.png";
import sqlare from "@/../public/logo.svg"

export default function Home() {
  return (
    <div className="font-Pretendard">
      <Header />
      <main className=" flex h-[95vh] w-full items-center justify-center text-left">
        <div className=" flex-col flex h-[95vh] w-full items-center justify-center text-left">
          <Image className="avatar mb-5" alt="Profile" src={avatar} width={128} height={128} />
          <div className="flex flex-row justify-center ">
            <h1 className="text-4xl font-black">남현석</h1>
            <h2 className="mt-[23px] text-[11pt] text-gray-400">@imnyang</h2>
          </div>
          <div className="flex flex-row justify-center ">
            <Link href="https://sqlare.com">Team.</Link>
            <Link href="https://sqlare.com"><Image className="mt-[9px] ml-1" alt="logo" src={sqlare} width={10} /></Link>
            <Link href="https://sqlare.com">qlare</Link>
            <p className="ml-[5.5px] mr-[5.5px]">&</p>
            <Link href="https://xolving.com">Xolving</Link>
            <p className="ml-[5.5px]">| Full-Stack Developer</p>
          </div>
        </div>
      </main>
    </div>
  );
}
