import React from "react";
import styles from "../styles/pages/BlogPage.module.scss";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import {
	BlogMetadata,
	Colors,
	FiltersTabs,
	RouterPaths,
} from "../types/enums";
import { IBlogMetadata } from "../types/types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
	BlogPageContextProvider,
	useBlogPageContext,
} from "../context/blog-page-context";
import Link from "next/link";
import Avatar from "../components/reusables/avatar";
import { parseAuthors } from "../utils/parseAuthors";
import DateFormatter from "../components/reusables/date-formatter";

// TODO: Add this back in once we have blog posts
// const blog = ({
// 	allPosts,
// }: {
// 	allPosts: IBlogMetadata[];
// }) => {
	// TODO: Take this out once we have blog posts
	const blog = () => {
	return (
		// <BlogPageContextProvider posts={allPosts}>
			<BlogPageInnerContainer />
		// </BlogPageContextProvider>
	);
};

const BlogPageInnerContainer = () => {
	const { filterPosts } =
		useBlogPageContext();
	return (
		<Layout>
			<h1>Blog articles coming soon!</h1>
			{/*  TODO: Add this back in once we have blog posts
			<div className={styles.BlogPage}>
				<FilterSection />
				<div className={styles.BlogPage__ListContainer}>
					{filterPosts().map((post: IBlogMetadata) => (
						<PostPreview
							key={post[BlogMetadata.Slug]}
							title={post[BlogMetadata.Title]}
							coverImage={post[BlogMetadata.Img]}
							date={post[BlogMetadata.PublishDate]}
							authors={post[BlogMetadata.Authors]}
							authorImg={post[BlogMetadata.AuthorImage]}
							slug={post[BlogMetadata.Slug]}
						/>
					))}
				</div>
			</div> */}
		</Layout>
	);
};

type SelectedTabTuple = [
	string[],
	string[],
	React.Dispatch<React.SetStateAction<string[]>>
];

const FilterArray = () => {
	const {
		selectedTags,
		setSelectedTags,
		selectedAuthors,
		setSelectedAuthors,
		tagArray,
		authorArray,
		toggleTab,
	} = useBlogPageContext();
	let selectedTab: SelectedTabTuple = toggleTab === FiltersTabs.Tags ? [tagArray, selectedTags, setSelectedTags] : [authorArray, selectedAuthors, setSelectedAuthors]
	return (
		<>
			{selectedTab[0].map((tag, i) => (
				<IndividualFilterTag
					selectedFilters={selectedTab[1]}
					setSelectedFilters={selectedTab[2]}
					tag={tag}
					key={i}
				/>
			))}
		</>
	);
};

const FilterSection = () => {
	const {
		isOpen,
		setIsOpen,
	} = useBlogPageContext();

	return (
		<div className={styles.BlogPageFiltersContainer}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={styles.BlogPageFiltersButton}
			>
				<span>Filters </span>
				{isOpen ? <FaChevronUp /> : <FaChevronDown />}
			</button>
			{isOpen ? (
				<>
					<div className={styles.BlogPageFiltersListTabs}>
						{Object.values(FiltersTabs).map((tab) => (
							<FiltersTab filterTab={tab} key={tab} />
						))}
					</div>
					<div className={styles.BlogPageFiltersList}>
						<FilterArray />
					</div>
				</>
			) : null}
		</div>
	);
};

interface IFiltersTab {
	filterTab: FiltersTabs;
}

const FiltersTab = ({ filterTab }: IFiltersTab) => {
	const { toggleTab, setToggleTab } = useBlogPageContext();
	return (
		<div
			style={
				toggleTab !== filterTab
					? {
							borderBottom:
								"2px solid rgba(0, 118, 213, 0.3)",
					  }
					: {}
			}
			onClick={() => setToggleTab(filterTab)}
			className={styles.BlogPageFiltersListTab}
		>
			{filterTab}
		</div>
	);
};

const IndividualFilterTag = ({
	tag,
	selectedFilters,
	setSelectedFilters,
}: {
	tag: string;
	selectedFilters: string[];
	setSelectedFilters: React.Dispatch<
		React.SetStateAction<string[]>
	>;
}) => {
	let activeTag = selectedFilters.includes(tag);
	return (
		<button
			onClick={() => {
				if (activeTag) {
					setSelectedFilters(
						selectedFilters.filter((t) => t !== tag)
					);
				} else if (!activeTag) {
					setSelectedFilters([...selectedFilters, tag]);
				}
			}}
			style={
				activeTag
					? { backgroundColor: Colors.BluePrimary }
					: {}
			}
			className={styles.IndividualFilterTag}
		>
			<h3
				style={activeTag ? { color: Colors.White } : {}}
				className={styles.IndividualFilterTagText}
			>
				{tag}
			</h3>
		</button>
	);
};

function PostPreview({
	title,
	coverImage,
	date,
	authors,
	authorImg,
	slug,
}: {
	title: string;
	coverImage: string;
	date: any;
	authors: string | string[];
	authorImg: string;
	slug: string;
}) {
	const image = (
		<img
			src={coverImage}
			className={styles.PostPreviewImage}
			alt={title}
		/>
	);
	return (
		<div className={styles.PostPreview}>
			// TODO: Add this back in once we have blog posts
			{/* <div className={styles.PostPreviewImageContainer}>
				{slug ? (
					<Link
						as={`${RouterPaths.Blog}/${slug}`}
						href={`${RouterPaths.Blog}/[slug]`}
					>
						<a aria-label={title}>{image}</a>
					</Link>
				) : (
					image
				)}
				<h3 className={styles.PostPreviewTitle}>
					<Link
						as={`${RouterPaths.Blog}/${slug}`}
						href={`${RouterPaths.Blog}/[slug]`}
					>
						<a>{title}</a>
					</Link>
				</h3>
			</div>

			<div className={styles.PostPreviewContentContainer}>
				<div className={styles.PostPreviewMetaLine}>
					<Avatar
						name={parseAuthors(authors)}
						picture={authorImg}
					/>
					<div className={styles.PostPreviewDate}>
						<DateFormatter dateString={date} />
					</div>
				</div>
			</div> */}
		</div>
	);
}

// TODO: Add this back in once we have blog posts
// export async function getStaticProps() {
	// const allPosts = getAllPosts([
	// 	BlogMetadata.Title,
	// 	BlogMetadata.PublishDate,
	// 	BlogMetadata.Date,
	// 	BlogMetadata.Slug,
	// 	BlogMetadata.Authors,
	// 	BlogMetadata.AuthorImage,
	// 	BlogMetadata.Img,
	// 	BlogMetadata.Layout,
	// 	BlogMetadata.Tags,
	// ]);

	// return {
	// 	props: { allPosts },
	// };
// }
export default blog;
