import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Link } from "react-router";

interface ProjectCardProps {
    name: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link }) => {
    return (
        <Link to={link}>
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}

export default ProjectCard;