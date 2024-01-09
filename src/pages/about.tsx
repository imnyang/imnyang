import { GetStaticProps } from "next";
import Header from "@/components/Header";
import ReactMarkdown from "react-markdown";
import fs from "fs/promises";
import path from "path";

interface AboutProps {
  content: string;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <div className="font-Pretendard">
      <Header />
      <main className="justify flex h-[95vh] w-full items-center justify-center text-left">
        <ReactMarkdown className="markdown">{content}</ReactMarkdown>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const aboutmdPath = path.join(process.cwd(), "src/content/about.md");
  const content = await fs.readFile(aboutmdPath, "utf8");

  return {
    props: {
      content,
    },
  };
};

export default About;
