import { IEventColumn } from "../types/types";

export const cilApiclarityColumn: IEventColumn[] = [
	{
		title: "About the event",
		text: "The Cisco Innovation Labs Challenge: APIClarity Edition is a four-day event where participants will use APIClarity to complete a set of challenges to qualify for $10,000 in prizes. This event is tailored to developers with experience working with Kubernetes and will allow participants to progress through the challenges at their own pace. Participants can register in teams of 1 to 3 members.",
		eventDetails: [
			{
				name: "Virtual event:",
				date: "February 24th-27th, 2022",
			},
		],
		link: {
			text: "Click here to register",
			address:
				"https://challenges.hackworks.com/event/apiclaritychallenge",
		},
	},
	{
		title: "About APIClarity",
		text: "APIClarity, an open-source cloud-native visibility tool for APIs, utilizes a Service Mesh framework to capture and analyze API traffic, and identify potential risks. Use APIClarity to compare your OpenAPI specification to its state at runtime. For apps that don’t have an OpenAPI specification, leverage APIClarity to reconstruct a specification in a live environment. Cloud-native applications use and expose APIs, which have been the source of many highly publicized cyber-attacks and breaches. Leverage APIClarity to improve your API visibility and your application's security posture.",
		link: {
			text: "Go to APIClarity's Github repository",
			address: "https://github.com/apiclarity/apiclarity",
		},
	},
];
