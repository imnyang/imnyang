import ProjectsComponents from "./ProjectsComponents";

const projects = [
    {
        name: "team-neko/two_hearts",
        url: "https://chromewebstore.google.com/detail/fhbjjhpphmigcniggnhgoepaodgoobdk?utm_source=item-share-cb",
        description: "Two Hearts는 Chrome 확장 프로그램으로, 새탭을 더 간단명료하게 보여줍니다.",
        techStack: ["Bun", "Chrome", "TypeScript", "React"]
    },
    {
        name: "imnyang/today.isangjeong",
        url: "https://github.com/imnyang/today.isangjeong",
        description: "친구들과 간단하게 학교의 급식을 공유하기 위해 고안한 프로젝트입니다.\n원래 Python으로 작성되었지만 현재는 TypeScript로 재작성되었습니다.",
        techStack: ["Bun", "TypeScript", "Instagram"]
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
