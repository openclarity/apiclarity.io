import {
    FcAbout,
    FcApprove,
    FcBinoculars,
	FcBrokenLink,
	FcCameraIdentification,
	FcDocument,
	FcDoNotInsert,
	FcDoNotMix,
	FcEditImage,
	FcFlowChart,
	FcMultipleInputs,
    FcOrgUnit,
    FcProcess,
    FcSupport,
    FcUpload,
} from "react-icons/fc";
import styles from '../styles/pages/AboutPage.module.scss'

export const challengesArr: {
	text: string;
	icon: JSX.Element;
}[] = [
	{
		text: `Not all applications have their Open API specification${String.fromCharCode(
			160
		)}available.​`,
		icon: (
			<FcDocument className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `How can we get this for our legacy or external${String.fromCharCode(
			160
		)}applications?​​`,
		icon: (
			<FcBrokenLink className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Ability to detect that microservices still use deprecated APIs (a.k.a. Zombie${String.fromCharCode(
			160
		)}APIs)​​`,
		icon: (
			<FcDoNotMix className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Ability to detect that microservices use undocumented APIs (a.k.a. Shadow${String.fromCharCode(
			160
		)}APIs)​`,
		icon: (
			<FcDoNotInsert
				className={styles.IndividualCardIcon}
			/>
		),
	},
	{
		text: `Ability to get Open API specifications without code instrumentation or modifying existing workloads (seamless${String.fromCharCode(
			160
		)}documentation)​`,
		icon: (
			<FcMultipleInputs
				className={styles.IndividualCardIcon}
			/>
		),
	},
];

export const solutionsArr: {
	text: string;
	icon: JSX.Element;
}[] = [
	{
		text: `Capture all API traffic in an existing environment using a service-mesh${String.fromCharCode(
			160
		)}framework​​`,
		icon: (
			<FcCameraIdentification
				className={styles.IndividualCardIcon}
			/>
		),
	},
	{
		text: `Construct the Open API specification by observing the API${String.fromCharCode(
			160
		)}traffic​​​`,
		icon: (
			<FcBinoculars className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Allow the User to upload Open API spec, review, modify and approve generated Open API${String.fromCharCode(
			160
		)}specs​`,
		icon: (
			<FcUpload className={styles.IndividualCardIcon} />
		),
	},
	{
		text: `Alert the user on any difference between the approved API specification and the one that is observed in runtime, detects shadow & zombie${String.fromCharCode(
			160
		)}APIs​`,
		icon: <FcAbout className={styles.IndividualCardIcon} />,
	},
	{
		text: `UI dashboard to audit and monitor the API${String.fromCharCode(
			160
		)}findings​`,
		icon: (
			<FcEditImage className={styles.IndividualCardIcon} />
		),
	},
];

export const roadmapArr = [
	{
		text: "OAS 3.0, GraphQL, gRPC",
		icon: (
			<FcFlowChart
				className={styles.RoadmapBlockInfoIcon}
			/>
		),
	},
	{
		text: `Integration with additional environments (Browsers, Postman, API gateways,${String.fromCharCode(
			160
		)}etc.)`,
		icon: (
			<FcOrgUnit className={styles.RoadmapBlockInfoIcon} />
		),
	},
	{
		text: `Support spec schema review in${String.fromCharCode(
			160
		)}UI`,
		icon: (
			<FcProcess className={styles.RoadmapBlockInfoIcon} />
		),
	},
	{
		text: "System settings",
		icon: (
			<FcSupport className={styles.RoadmapBlockInfoIcon} />
		),
	},
	{
		text: "User management",
		icon: (
			<FcApprove className={styles.RoadmapBlockInfoIcon} />
		),
	},
];
