import React, {
	useContext,
	createContext,
	useState,
} from "react";
import { FiltersTabs } from "../types/enums";
import { IBlogMetadata } from "../types/types";

interface IBlogPageContext {
	selectedTags: string[];
	setSelectedTags: React.Dispatch<
		React.SetStateAction<string[]>
	>;
	selectedAuthors: string[];
	setSelectedAuthors: React.Dispatch<
		React.SetStateAction<string[]>
	>;
	tagArray: string[];
	authorArray: string[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	toggleTab: FiltersTabs;
	setToggleTab: React.Dispatch<
		React.SetStateAction<FiltersTabs>
    >;
    filterPosts: () => IBlogMetadata[]
}

export const BlogPageContext = createContext(
	{} as IBlogPageContext
);

const BlogPageContextProvider = ({
	children,
	posts,
}: {
	children: JSX.Element | JSX.Element[];
	posts: IBlogMetadata[];
}) => {
	const [selectedTags, setSelectedTags] = useState<
		string[]
	>([]);
	const [selectedAuthors, setSelectedAuthors] = useState<
		string[]
	>([]);
	let tagArray = Array.from(
		new Set(posts.map((post) => [...post.tags]).flat())
	);
	let authorArray = Array.from(
		new Set(
			posts
				.map((post) =>
					typeof post.authors === "string"
						? post.authors
						: [...post.authors]
				)
				.flat()
		)
	);
	const [isOpen, setIsOpen] = useState(false);
    const [toggleTab, setToggleTab] = useState(FiltersTabs.Tags);
    const filterPosts = () => {
        if (!selectedTags.length && !selectedAuthors.length) {
            return posts
        } else if (selectedTags.length && !selectedAuthors.length) {
            return posts.filter((post) => selectedTags.some((r) => post.tags.includes(r)))
        } else if (!selectedTags.length && selectedAuthors.length) {
            return posts.filter((post) => selectedAuthors.some((r) => post.authors.includes(r)))
        } else if (selectedAuthors.length && selectedTags.length) {
            return posts.filter((post) => selectedTags.some((r) => post.tags.includes(r)) && selectedAuthors.some((r) => post.authors.includes(r)))
        }
    }
	return (
		<BlogPageContext.Provider
			value={{
				selectedTags,
				setSelectedTags,
				selectedAuthors,
				setSelectedAuthors,
				tagArray,
				authorArray,
				isOpen,
				setIsOpen,
				toggleTab,
                setToggleTab,
                filterPosts
			}}
		>
			{children}
		</BlogPageContext.Provider>
	);
};

function useBlogPageContext() {
	const context = useContext(BlogPageContext);
	return context;
}

export { useBlogPageContext, BlogPageContextProvider };
