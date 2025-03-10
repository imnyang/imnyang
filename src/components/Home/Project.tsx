import ProjectCard from "../ProjectCard";

const projects = [
    {
        name: "🍴 오늘 인천 상정중학교",
        description: "오늘의 급식을 인스타그램에서도 빠르게",
        link: "https://www.instagram.com/today.isangjeong/"
    },
    {
        name: "💕 Two Hearts",
        description: "Chrome 새탭을 더 좋게 (사실 Edge에서 쓰려고 만듦)",
        link: "https://github.com/imnyang/two_hearts"
    },
    {
        name: "🩷 Dynamic Kawaii",
        description: "진정한 VSCode 테마",
        link: "https://github.com/imnyang/dynamic-kawaii"
    },
    {
        name: "💊 FakeAlyac",
        description: "어? 내 시스템 트레이에 있는거 알약 아닌데?",
        link: "https://github.com/imnyang/FakeAlyac"
    }
]

export default function Project() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center select-none">
            <div className="w-full md:w-[50%] p-4">
                <h1 className="text-2xl font-bold">📖 Project</h1>
                <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} name={project.name} description={project.description} link={project.link} />
                    ))}
                </div>
            </div>
        </div>
    );
}
