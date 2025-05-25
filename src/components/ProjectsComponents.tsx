type Project = {
    name: string;
    url: string;
    description: string;
    techStack: string[];
};

export default function ProjectsComponents({ project }: { project: Project }) {
    return (
        <div>
            <div>
                <h1 className="text-xl mb-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.name}
                    </a>
                </h1>
                <p className="text-sm text-muted-forceground font-light mb-2">
                    {project.description.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                <div>
                    {project.techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="inline-block bg-accent text-accent-foreground text-xs mr-2 px-2.5 py-0.5 rounded select-none"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}