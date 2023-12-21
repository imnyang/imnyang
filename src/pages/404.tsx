import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="font-Pretendard">
      <Header />
      <main className="justify flex h-[95vh] w-full items-center justify-center text-left">
        <h1 className="text-5xl font-black">404</h1>
        <br />
        <p>What are you finding?</p>
      </main>
    </div>
  );
}
