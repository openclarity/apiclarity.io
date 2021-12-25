import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/pages/AboutPage.module.scss";
import {
	challengesArr,
	roadmapArr,
	solutionsArr,
} from "../data/aboutPageArrs";
import { FcAdvance } from "react-icons/fc";
import { Colors, SectionHeaders } from "../types/enums";

const about = () => {
	return (
		<Layout pagePath={"/about"} pageTitle="About APIClarity">
			<div className={styles.AboutPage}>
				<h1 style={{display: "none"}}>About APIClarity</h1>
				<h2 className={styles.AboutPageHeader}>
					{SectionHeaders.AboutPageHeader}
				</h2>
				<InfoSection
					header={SectionHeaders.AboutChallenges}
					infoArr={challengesArr}
					bgColor={Colors.GrayBGColor}
				/>
				<InfoSection
					header={SectionHeaders.AboutSolutions}
					infoArr={solutionsArr}
					darkHover
				/>
				{/* <RoadmapSection /> */}
			</div>
		</Layout>
	);
};

const SectionHeader = ({ header }: { header: SectionHeaders }) => {
	return (
		<h3 className={styles.AboutPageSectionHeader}>
			{header}
		</h3>
	);
};

const InfoSection = ({
	header,
	infoArr,
	bgColor,
	darkHover = false,
}: {
	header: SectionHeaders;
	infoArr: { text: string; icon: JSX.Element }[];
	bgColor?: string;
	darkHover?: boolean;
}) => {
	return (
		<div
			style={bgColor ? { backgroundColor: bgColor } : {}}
			className={styles.AboutPageSection}
		>
			<SectionHeader header={header} />
			<div className={styles.AboutPageSectionList}>
				{infoArr.map((info, i) => (
					<InfoBlock
						darkHover={darkHover}
						key={i}
						info={info}
					/>
				))}
			</div>
		</div>
	);
};

const InfoBlock = ({
	info,
	darkHover = false,
}: {
	info: { text: string; icon: JSX.Element };
	darkHover?: boolean;
}) => {
	return (
		<div
			className={`${styles.IndividualCard} ${
				darkHover ? styles.IndividualCardDarkHover : ""
			}`}
		>
			<div className={styles.IndividualCardIconContainer}>
				{info.icon}
			</div>
			<div className={styles.IndividualCardTextContainer}>
				<p className={styles.IndividualCardText}>
					{info.text}
				</p>
			</div>
		</div>
	);
};

const RoadmapSection = () => {
	return (
		<div style={{backgroundColor: Colors.GrayBGColor}} className={styles.AboutPageSection}>
			<h3 className={styles.AboutPageSectionHeader}>
				{SectionHeaders.AboutRoadmap}
			</h3>
			<div className={styles.AboutPageSectionList}>
				{roadmapArr.map((item, i) => {
					return <RoadmapBlock key={i} item={item} index={i} />;
				})}
			</div>
		</div>
	);
};

const RoadmapBlock = ({
	item,
	index,
}: {
	item: { text: string; icon: JSX.Element };
	index: number;
}) => {
	return (
		<div style={index === roadmapArr.length - 1 ? {width: "10%"} : {}} className={styles.RoadmapBlock}>
			<div className={styles.RoadmapBlockInfo}>
				<div
					className={styles.RoadmapBlockInfoIconContainer}
				>
					{item.icon}
				</div>
				<p className={styles.RoadmapBlockInfoText}>
					{item.text}
				</p>
			</div>
			{index !== roadmapArr.length - 1 && (
				<FcAdvance
					className={styles.RoadmapBlockArrowIcon}
				/>
			)}
		</div>
	);
};

export default about;
