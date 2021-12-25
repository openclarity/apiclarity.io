import { FcCameraIdentification, FcEditImage, FcPrivacy } from "react-icons/fc";
import { ImgPaths } from "../types/enums";
import { ICompanyObj, IEventObj, IFeatureObj } from "../types/types";
import styles from '../styles/pages/Home.module.scss'

export const featuresArr: IFeatureObj[] = [
	{
		icon: (
			<FcPrivacy className={styles.IndividualCardIcon} />
		),
		textBold: `Quick and Easy API Visibility &${String.fromCharCode(
			160
		)}Analysis`,
		text: `Reduce API security risk without code instrumentation or workload${String.fromCharCode(
			160
		)}modification.`,
	},
	{
		icon: (
			<FcEditImage className={styles.IndividualCardIcon} />
		),
		textBold: `Comprehensive Dashboard to Monitor${String.fromCharCode(
			160
		)}APIs`,
		text: `Evaluate OpenAPI specifications for security issues and best practices. Where there is no spec, automatically${String.fromCharCode(
			160
		)}generate one.`,
	},
	{
		icon: (
			<FcCameraIdentification
				className={styles.IndividualCardIcon}
			/>
		),
		textBold: `Designed for Developers, Loved by${String.fromCharCode(
			160
		)}Security`,
		text: `Detect Zombie and Shadow APIs, alert users on risks, identify changes between approved OpenAPI specs and APIs at${String.fromCharCode(
			160
		)}runtime.`,
	},
];

export const eventsArr: IEventObj[] = [
	{
		title: `CNCF Live Webinar: Introduction to APIClarity – A Wireshark for${String.fromCharCode(
			160
		)}APIs`,
		date: "September 21st, 2021",
		banner: `${ImgPaths.SharedImages}/cncf-event-banner.jpeg`,
		link: "https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-live-webinar-introduction-to-apiclarity-a-wireshark-for-apis/",
	},
	{
		title: `KubeCon + CloudNative North America${String.fromCharCode(
			160
		)}2021`,
		date: "October 13th, 2021",
		banner: `${ImgPaths.SharedImages}/kubecon-banner.png`,
		link: "https://kccncna2021.sched.com/event/lVD8",
	},
];

export const maintainersArr: ICompanyObj[] = [
	{
		name: "API Metrics",
		logo: ImgPaths.APIMetricsLogo,
		link: "https://apimetrics.io/",
	},
	{
		name: "42Crunch",
		logo: ImgPaths.FortyTwoCrunchLogo,
		link: "https://42crunch.com/",
	},
	{
		name: "Cisco",
		logo: ImgPaths.CiscoLogoBlue,
		link: "https://www.ciscodesignpartners.com/application-security",
	},
];