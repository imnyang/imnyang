import { GetStaticProps } from "next";
import Header from "@/components/Header";
import ReactMarkdown from "react-markdown";
import fs from "fs/promises";
import path from "path";

interface ProjectProps {
  content: string;
}

const project: React.FC<ProjectProps> = ({ content }) => {
  return (
    <div className="font-Pretendard">
      <Header />
      <main className="justify flex h-[95vh] w-full items-center justify-center text-left">
        <ReactMarkdown className="markdown">{content}</ReactMarkdown>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const projectmdPath = path.join(process.cwd(), "src/content/stacks.md");
  const content = await fs.readFile(projectmdPath, "utf8");

  return {
    props: {
      content,
    },
  };
};

export default project;
