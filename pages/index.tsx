import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";
import { getAllPosts } from "../lib/api";
import {
	BlogMetadata,
	ImgPaths,
	RouterPaths,
	SectionHeaders,
} from "../types/enums";
import {
	IBlogMetadata,
	ICompanyObj,
	IFeatureObj,
} from "../types/types";
import {
	eventsArr,
	featuresArr,
  maintainersArr,
} from "../data/landingPageArrs";
import { Carousel } from "react-responsive-carousel";
import SectionHeader from "../components/reusables/SectionHeader";
import { parseAuthors } from "../utils/parseAuthors";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
import useWindowSize from "../hooks/useWindowSize";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Home = ({
	allPosts,
}: {
	allPosts: IBlogMetadata[];
}) => {
	return (
		<Layout pageTitle="Home">
			<div className={styles.Home}>
				<HeroBanner />
				<FeaturesSection />
				<VideoSection />
				{/* <UpcomingEventsSection /> */}
				{/* <BlogSliderSection allPosts={allPosts} /> */}
				<CodeSection />
			</div>
		</Layout>
	);
};

const HeroBanner = () => {
	return (
		<div className={styles.HomeHeader}>
			<div className={styles.HomeHeaderTextContainer}>
				<img
					src={ImgPaths.LogoDarkHorizantalSVG}
					alt="logo"
					className={styles.HomeHeaderLogo}
				/>
				<h1 style={{color: "transparent", height: "0px"}}>APIClarity</h1>
				<h2 className={styles.HomeHeaderTextSubheader}>
					Open source for API traffic visibility in
					K8s&nbsp;clusters
				</h2>
			</div>
		</div>
	);
};

const FeaturesSection = () => {
	return (
		<div className={styles.FeaturesSection}>
			<div
				className={
					styles.FeaturesSectionShortDescriptionContainer
				}
			>
				<p
					className={
						styles.FeaturesSectionShortDescriptionContainerText
					}
				>
					APIClarity, an open source cloud native visibility
					tool for APIs, utilizes a Service Mesh framework
					to capture and analyze API traffic, and identify
					potential&nbsp;risks.
				</p>
				<p
					className={
						styles.FeaturesSectionShortDescriptionContainerText
					}
				>
					Use APIClarity to compare your OpenAPI
					specification to its state at runtime. For apps
					that don’t have an OpenAPI specification, leverage
					APIClarity to reconstruct a specification in a
					live&nbsp;environment.
				</p>
				<p
					className={
						styles.FeaturesSectionShortDescriptionContainerText
					}
				>
					Cloud native applications use and expose APIs,
					which have been the source of many highly
					publicized cyber-attacks and breaches. Leverage
					APIClarity to improve your API visibility and your
					applications security&nbsp;posture.
				</p>
			</div>
			<div className={styles.FeaturesSectionList}>
				{featuresArr.map(
					(feature: IFeatureObj, i: number) => (
						<IndividualCard key={i} feature={feature} />
					)
				)}
			</div>
		</div>
	);
};

interface IIndividualCardProps {
	feature: IFeatureObj;
}

const IndividualCard = ({
	feature,
}: IIndividualCardProps) => {
	return (
		<div className={styles.IndividualCard}>
			{feature.icon}
			<div className={styles.IndividualCardTextContainer}>
				<p className={styles.IndividualCardTextBold}>
					{feature.textBold}
				</p>
				<p className={styles.IndividualCardText}>
					{feature.text}
				</p>
			</div>
		</div>
	);
};

const UpcomingEventsSection = () => {
	return (
		<div className={styles.UpcomingEventsSection}>
			<SectionHeader
				text={SectionHeaders.UpcomingEvents}
				light
			/>
			<div className={styles.UpcomingEventsSectionList}>
				<Carousel
					emulateTouch
					autoPlay
					interval={5000}
					infiniteLoop
					showStatus={false}
          			showThumbs={false}
					showArrows={false}
				>
					{eventsArr.map((event) => (
						<IndividualEvent
							key={event.link}
							event={event}
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
};

const IndividualEvent = ({ event }) => {
	const window = useWindowSize();
	return (
		<div className={styles.IndividualEvent}>
			<img
				className={styles.IndividualEventImage}
				src={event.banner}
			/>
			<p className={styles.IndividualEventTitle}>
				{event.title}
			</p>
			<p className={styles.IndividualEventDate}>
				{event.date}
			</p>
			<a
				className={styles.IndividualEventLink}
				href={event.link}
				target="_blank"
			>
				Learn More
			</a>
		</div>
	);
};

const VideoSection = () => {
	return (
		<div className={styles.VideoSection}>
			<SectionHeader text={SectionHeaders.VideoSection} />
			<div className={styles.VideoSectionVideoContainer}>
				<ReactPlayer
					url={"/assets/shared/apiclarity.mp4"}
					className={styles.VideoSectionVideo}
					width="100%"
					height="100%"
					controls={true}
					// light={"/assets/shared/homepage-filler.jpg"}
				/>
			</div>
		</div>
	);
};

const BlogSliderSection = ({
	allPosts,
}: {
	allPosts: IBlogMetadata[];
}) => {
	const router = useRouter();
	return (
		<div className={styles.BlogSliderSection}>
			<SectionHeader
				text={SectionHeaders.Resources}
				light
			/>
			<div className={styles.BlogSliderSectionList}>
				{allPosts.map((post: IBlogMetadata) => {
					return (
						<div
							onClick={() =>
								router.push(
									`${post[BlogMetadata.Slug]}`
								)
							}
							className={styles.BlogSliderSectionArticle}
							key={post[BlogMetadata.Slug]}
						>
							<img
								className={
									styles.BlogSliderSectionArticleImage
								}
								src={post[BlogMetadata.Img]}
								alt={post[BlogMetadata.Title]}
							/>
							<h3
								className={
									styles.BlogSliderSectionArticleTitle
								}
							>
								{post[BlogMetadata.Title]}{" "}
								<span
									className={
										styles.BlogSliderSectionArticleAuthor
									}
								>
									-{" "}
									{parseAuthors(post[BlogMetadata.Authors])}
								</span>
							</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const CodeSection = () => {
	return (
		<div className={styles.CodeSection}>
			<SectionHeader text={SectionHeaders.CheckOutCode} />
			<div className={styles.CodeSectionButtonContainer}>
				<a
					className={styles.CodeSectionButton}
					href="https://github.com/apiclarity/apiclarity"
					target="_blank"
				>
					<AiFillGithub
						className={styles.CodeSectionButtonIcon}
					/>{" "}
					<span>Github</span>
				</a>
				<Link href={RouterPaths.Docs}>
					<a className={styles.CodeSectionButton}>
						<span>Documentation</span>
					</a>
				</Link>
			</div>
			<div className={styles.CodeSectionSubSection}>
				<h3 className={styles.CodeSectionSubheader}>
					Created by
				</h3>
				<div className={styles.CodeSectionSubSectionList}>
					<IndividualCompanyCard
						company={{
							name: "Cisco",
							logo: ImgPaths.CiscoLogoBlue,
							link: "https://www.ciscodesignpartners.com/application-security",
						}}
					/>
				</div>
			</div>
			<div className={styles.CodeSectionSubSection}>
				<h3 className={styles.CodeSectionSubheader}>
					Maintained by
				</h3>
				<div className={styles.CodeSectionSubSectionList}>
					{maintainersArr.map((maintainer, i) => (
						<IndividualCompanyCard
							company={maintainer}
							key={i}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const IndividualCompanyCard = ({
	company,
}: {
	company: ICompanyObj;
}) => {
	return (
		<a
			href={company.link}
			target="_blank"
			className={styles.IndividualContributorContainer}
		>
			<div
				className={
					styles.IndividualContributorLogoContainer
				}
			>
				<img
					className={styles.IndividualContributorLogo}
					src={company.logo}
					alt={`${company.name} Logo`}
				/>
			</div>
		</a>
	);
};

export async function getStaticProps() {
	const allPosts = getAllPosts([
		BlogMetadata.Title,
		BlogMetadata.Date,
		BlogMetadata.PublishDate,
		BlogMetadata.Authors,
		BlogMetadata.AuthorImage,
		BlogMetadata.Img,
		BlogMetadata.Tags,
		BlogMetadata.Layout,
		BlogMetadata.Slug,
	]);

	return {
		props: { allPosts },
	};
}

export default Home;
