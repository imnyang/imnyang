import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface ProjectCardProps {
    name: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link }) => {
    return (
        <a href={link}>
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </a>
    );
}

export default ProjectCard;