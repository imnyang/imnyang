import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row items-center">
      <div className="logo w-[80%] pl-5 pt-2 pb-2 text-2xl">
        <Link href="/">💕</Link>
      </div>
      <div className="list w-[20%] pr-5 pt-2 text-sm">
        <Link className="pr-2" href="/about">
          About
        </Link>
        <Link className="pr-2" href="https://blog.imnyang.xyz">
          Blog
        </Link>
      </div>
    </header>
  );
}
