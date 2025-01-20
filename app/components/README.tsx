import React from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

const readmeUrl = 'https://raw.githubusercontent.com/imnyang/imnyang/refs/heads/main/README.md';

const markdownToHtml = async (markdown: string) => {
    const result = await remark()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(html)
        .process(markdown);
    return result.toString();
};

const README = () => {
    const [content, setContent] = React.useState<string>('');

    React.useEffect(() => {
        const fetchAndConvertMarkdown = async () => {
            const response = await fetch(readmeUrl);
            const markdown = await response.text();
            const htmlContent = await markdownToHtml(markdown);
            setContent(htmlContent);
        };
        fetchAndConvertMarkdown();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default README;
