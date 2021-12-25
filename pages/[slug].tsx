import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ErrorPage from "next/error";
import Layout from "../components/Layout";
import { getPostBySlug, getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import styles from "../styles/pages/BlogPost.module.scss";
import { TiArrowBack } from "react-icons/ti";
import Avatar from "../components/reusables/avatar";
import DateFormatter from "../components/reusables/date-formatter";
import { BlogMetadata, RouterPaths } from "../types/enums";
import { IBlogMetadata } from "../types/types";
import { parseAuthors } from "../utils/parseAuthors";
import ReactMarkdown from "react-markdown";
import markdownToHtml from "../lib/markdownToHtml";
import { BlogJsonLd } from "next-seo";

export default function Post({
	post,
}: {
	post: IBlogMetadata;
}) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout pageTitle={post.title} pagePath={router.asPath}>
			<div className={styles.BlogPost}>
				{/* <a
					href={RouterPaths.Landing}
					className={styles.BlogPostBackButton}
				>
					<TiArrowBack size={32} />{" "}
					<p className={styles.BlogPostBackButtonText}>
						Back
					</p>
				</a> */}
				{router.isFallback ? (
					<h1 className={styles.BlogPostTitle}>Loading…</h1>
				) : (
					<>
						<div
							className={styles.BlogPostHeaderCoverImage}
						>
							<img
								src={post[BlogMetadata.Img]}
								alt={post[BlogMetadata.Title]}
							/>
						</div>
						<article className={styles.BlogPostContainer}>
							<Head>
								<meta
									property="og:image"
									content={`https://apiclarity.io${
										post[BlogMetadata.Img]
									}`}
								/>
							</Head>
							<BlogJsonLd
								url={`${router.basePath}${router.asPath}`}
								images={[
									`https://apiclarity.io${
										post[BlogMetadata.Img]
									}`,
								]}
								title={post.title}
								datePublished={post.publishdate}
								dateModified={post.publishdate}
								authorName={
									typeof post.authors === "string"
										? post.authors
										: post.authors[0]
								}
								description={post.title}
							/>
							<div className={styles.PostHeader}>
								<h1 className={styles.BlogPostTitle}>
									{post[BlogMetadata.Title]}
								</h1>
								<div className={styles.BlogPostTagList}>
									{post[BlogMetadata.Tags].map((tag, i) => {
										return (
											<div
												className={styles.BlogPostTag}
												key={i}
											>
												{tag}
											</div>
										);
									})}
								</div>
								<div
									className={styles.BlogPostHeaderByline}
								>
									<div
										className={
											styles.BlogPostHeaderBylineAvatar
										}
									>
										<Avatar
											name={parseAuthors(
												post[BlogMetadata.Authors]
											)}
											picture={
												post[BlogMetadata.AuthorImage]
											}
										/>
									</div>
									<div
										className={
											styles.BlogPostHeaderBylineDate
										}
									>
										<DateFormatter
											dateString={
												post[BlogMetadata.PublishDate]
											}
										/>
									</div>
								</div>
							</div>
							<div className={styles.BlogPostBodyContainer}>
								<div
									className={styles.BlogPostBody}
									dangerouslySetInnerHTML={{
										__html: post.content,
									}}
								/>
								{/* <ReactMarkdown children={post.content} className={styles.BlogPostBody} /> */}
							</div>
						</article>
					</>
				)}
			</div>
		</Layout>
	);
}

export async function getStaticProps({
	params,
}: {
	params: any;
}) {
	const post: any = getPostBySlug(params.slug, [
		BlogMetadata.Title,
		BlogMetadata.Date,
		BlogMetadata.PublishDate,
		BlogMetadata.Slug,
		BlogMetadata.Authors,
		BlogMetadata.Content,
		BlogMetadata.Img,
		BlogMetadata.AuthorImage,
		BlogMetadata.Tags,
	]);
	const content = await markdownToHtml(post.content || "");

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts([BlogMetadata.Slug]);

	return {
		paths: posts.map((post: IBlogMetadata) => {
			return {
				params: {
					slug: post[BlogMetadata.Slug],
				},
			};
		}),
		fallback: false,
	};
}
