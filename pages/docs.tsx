import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
	DocsContextProvider,
	useDocsContext,
} from "../context/docs-context";
import styles from "../styles/pages/DocsPage.module.scss";
import { DocsSections } from "../types/enums";
import { getReadme } from "../lib/api";
import ReactMarkdown, { uriTransformer } from "react-markdown";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from 'rehype-slug'
import withToc, { Toc, TocEntry } from "@stefanprobst/rehype-extract-toc"
import rehypeStringify from "rehype-stringify";

export default function Docs({ readme, toc }: { readme: string, toc: TocEntry }) {
  return (
    <DocsContextProvider>
      <Layout pageTitle="Documentation" pagePath="/docs">
        <h1 style={{ color: "transparent", height: "0px" }}>Documentation</h1>
        <div className={styles.DocsPage}>
			<TOCSection toc={toc}/>
          <ContentSection content={readme} />
        </div>
      </Layout>
    </DocsContextProvider>
  );
};
/*
const TOCSection = () => {
	const {
		challenges,
		solution,
		building,
		installationk8s,
	} = useDocsContext();
	return (
		<div className={styles.TOCSection}>
			<p
				onClick={() => challenges.current.scrollIntoView()}
				className={styles.TOCSectionTopic}
			>
				{DocsSections.Challenges}
			</p>
			<p
				onClick={() => solution.current.scrollIntoView()}
				className={styles.TOCSectionTopic}
			>
				{DocsSections.Solution}
			</p>
			<p
				onClick={() => building.current.scrollIntoView()}
				className={styles.TOCSectionTopic}
			>
				{DocsSections.Building}
			</p>
			<p
				onClick={() =>
					installationk8s.current.scrollIntoView()
				}
				className={styles.TOCSectionTopic}
			>
				{DocsSections.Installation}
			</p>
		</div>
	);
};
*/

function TOCSection({toc}:{toc: TocEntry}) {
	return (
	<div className={styles.TOCSection}>
		{toc.children.map((item) => (
		<a key={item.id} href={"#" + item.id}>
			<p className={styles.TOCSectionTopic}>{item.value}</p>
		</a>
		))}
	</div>
	);
}

function readmeImgUriTransformer(uri) {
  return /^https?:/.test(uri) ? uriTransformer(uri) : `/assets/shared/docs/${uri}`;
}

const ContentSection = ({content}:{content: string}) => {
  /* eslint-disable react/no-children-prop */
  return (
    <div className={styles.ContentSection}>
      <ReactMarkdown
        children={content}
        rehypePlugins={[rehypeSlug]}
        transformImageUri={readmeImgUriTransformer}
        components={{
          pre({ node, className, children, ...props }) {
            return (
              <pre className={styles.DocsPageCodeBlock} {...props}>
                {children}
              </pre>
            );
          },
          a({ node, className, children, ...props }) {
            return (
              <a className={styles.DocsPageLink} {...props}>
                {children}
              </a>
            );
          },
          img({ node, className, children, ...props }) {
            // Total hack to filter out title image
            if (props.src.endsWith("API_clarity.svg")) return null;
            return (
              <img className={styles.DocsPageImage} {...props}>
                {children}
              </img>
            );
          },
        }}
      />
    </div>
  );
  /* eslint-enable react/no-children-prop */
};

const TopicSection = ({
	header,
	children,
	reference,
}: {
	header: DocsSections;
	children: JSX.Element | JSX.Element[];
	reference: React.MutableRefObject<any>;
}) => {
	return (
		<div ref={reference} className={styles.TopicSection}>
			<h4 className={styles.TopicSectionHeader}>
				{header}
			</h4>
			{children}
		</div>
	);
};

export async function getStaticProps({ params }: { params: any }) {
  const readme = await getReadme()

  const readmeVfile = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(withToc)
    .use(rehypeStringify)
    .process(readme);

  const toc = readmeVfile.data.toc[0];

  return {
    props: {
      readme,
	  toc
    },
  };
}