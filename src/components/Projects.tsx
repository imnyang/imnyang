import ProjectsComponents from "./ProjectsComponents";

const projects = [
    {
        name: "EPC/broadcast",
        url: "https://www.youtube.com/playlist?list=PLZeYZotn5_IOJDek6e35NKzUtJm09yxZD",
        description: "Effect Playing Contest 2025의 방송화면 기능 전체를 맡았습니다.",
        techStack: ["Bun", "TypeScript", "React"]
    },
    {
        name: "team-neko/two_hearts",
        url: "https://chromewebstore.google.com/detail/fhbjjhpphmigcniggnhgoepaodgoobdk?utm_source=item-share-cb",
        description: "Two Hearts는 Chrome 확장 프로그램으로, 새탭을 더 간단명료하게 보여줍니다.",
        techStack: ["Bun", "Chrome", "TypeScript", "React"]
    },
    {
        name: "team-neko/dynamic-kawaii",
        url: "https://github.com/team-neko/dynamic-kawaii",
        description: "Dynamic Kawaii는 Visual Studio Code의 몇 안되는 핑크색 다크모드입니다.",
        techStack: ["VSCode", "json"]
    },
    {
        name: "imnyang/tsh",
        url: "https://github.com/imnyang/tsh",
        description: "tsh는 Rust로 작성된 CLI Trash Bin입니다.",
        techStack: ["Rust", "trash"]
    }
];

export default function Projects() {
    return (
        <div id="projects" className="mt-8">
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <ProjectsComponents key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
