import { ImgPaths } from "../types/enums";
import { IResource, IResourcesArticle, IResourcesMedia } from "../types/types";

export const resourcesList: IResource[] = [
	{
		title:
			"APIClarity, a New Open Source Solution to Ensure API Visibility & Enhance API Security",
		author: "Alexei Kravtsov",
		type: "blog",
		thumbnail:
			"/assets/blog/apiclarity-a-new-open-source-solution/apiclarity-banner-article-1.jpg",
		link: "apiclarity-a-new-open-source-solution",
	},
	{
		title:
			"CNCF Live Webinar: Introduction to APIClarity – A Wireshark for APIs",
		author: "Zohar Kaufman & Alexei Kravtsov",
		type: "video",
		thumbnail: "/assets/shared/cncf-webinar-thumb.webp",
		link: "https://www.youtube.com/watch?v=2vYdWf5hjNU",
	},
	{
		title: "Upstack Your Thinking – With APIClarity",
		author: "Justin Cohen",
		link: "https://techblog.cisco.com/blog/upstack-your-thinking-with-apiclarity/",
		thumbnail:
			"/assets/shared/upstack-your-thinking-thumbnail.jpg",
		type: "blog",
	},
	{
		title:
			"APIClarity Demo - Wireshark your service mesh APIs for free",
		author: "Justin Cohen",
		link: "https://www.youtube.com/watch?v=mVp2f9ByrVA",
		thumbnail: "/assets/shared/apiclarity-demo-thumb.webp",
		type: "video",
	},
];

export const resourcesArticles: IResourcesArticle[] = [
	{
		author: "JockDaRock",
		image:
			"/assets/shared/resourcesPage/devnet-article-12-13-21.png",
		link: "https://blogs.cisco.com/developer/bringingclaritytoapis01",
		linkText: "Cisco Blog",
		title:
			"Bringing Clarity to APIs on Cloud Native Technologies",
	},
	{
		author: "Beth Pariseau",
		image:
			"/assets/shared/resourcesPage/searchitoperations-thumbnail.jpeg",
		link: "https://searchitoperations.techtarget.com/news/252510820/Shift-left-doesnt-complete-DevSecOps-story-for-fintech",
		linkText: "SearchITOperations",
		title:
			"'Shift left' doesn't complete DevSecOps story for fintech",
	},
	{
		author: "Torsten Volk",
		image:
			"/assets/shared/resourcesPage/apiclarity-apisecurity-thumbnail.jpg",
		link: "https://techblog.cisco.com/blog/shifting-left-api-security/",
		linkText: "Cisco Tech Blog",
		title:
			"Shifting Left API Security - APIClarity Provides the Foundation for Continuous API Compliance",
	},
	{
		author: "Brandon Vigliarolo",
		image:
			"/assets/shared/resourcesPage/how-well-know-api-thumbnail.jpeg",
		link: "https://www.techrepublic.com/article/how-well-do-you-know-your-apis-not-well-enough-says-cisco/",
		linkText: "TechRepublic",
		title:
			"How well do you know your APIs? Not well enough, says Cisco",
	},
	{
		author: "Emma Chervek",
		image:
			"/assets/shared/resourcesPage/sdx-article-thumbnail.jpeg",
		link: "https://www.sdxcentral.com/articles/news/cisco-apiclarity-eases-dev-sec-tensions-over-shifting-left/2021/11/",
		linkText: "SDxCentral",
		title:
			"Cisco APIClarity Eases Dev-Sec Tensions Over Shifting Left",
	},
	{
		author: "Michael Bogan",
		image:
			"/assets/shared/resourcesPage/openapi-for-secure-thumbnail.png",
		link: "https://dzone.com/articles/openapi-for-secure-and-robust-api-integration",
		linkText: "DZone",
		title:
			"How to Use OpenAPI for Secure and Robust API Integration",
	},
	{
		author: "Torsten Volk",
		image:
			"/assets/shared/resourcesPage/top-3-announcements-thumbnail.png",
		link: "https://torstenvolk.medium.com/kubecon-2021-top-3-announcements-apiclarity-hashicorp-waypoint-and-dell-emc-csm-a46f39f54bd",
		linkText: "Medium",
		title:
			"KubeCon 2021 Top 3 Announcements: APIClarity, HashiCorp Waypoint, and Dell EMC CSM",
	},
	{
		author: "Michael Bogan",
		image: "/assets/shared/apiclarity-dashboard-2.jpg",
		link: "https://dzone.com/articles/apiclarity-in-action",
		linkText: "DZone",
		title:
			"Watching the Requests Go By: Reconstructing an API Spec with APIClarity",
	},
	{
		author: "Alexei Kravtsov",
		image:
			"/assets/blog/apiclarity-a-new-open-source-solution/apiclarity-banner-article-1.jpg",
		link: "apiclarity-a-new-open-source-solution",
		linkText: "apiclarity.io",
		title:
			"APIClarity, a New Open Source Solution to Ensure API Visibility & Enhance API Security",
	},
	{
		author: "Justin Cohen",
		image:
			"/assets/shared/upstack-your-thinking-thumbnail.jpg",
		link: "https://techblog.cisco.com/blog/upstack-your-thinking-with-apiclarity/",
		linkText: "Cisco Tech Blog",
		title: "Upstack Your Thinking – With APIClarity",
	},
];

export const resourcesMedia: IResourcesMedia[] = [
	{
		title:
			"Cisco Champion - S8|42 API Visibility with APIClarity",
		link: "https://podcasts.apple.com/ca/podcast/s8-e42-api-visibility-with-apiclarity/id1382946335?i=1000538992503",
		mediaType: "Podcast",
		image: `${ImgPaths.SharedImages}/resourcesPage/cisco-champion-podcast.webp`,
	},
	{
		title: "KubeCon + CloudNative North America 2021",
		link: "https://kccncna2021.sched.com/event/lVD8",
		mediaType: "Conference",
		image: `${ImgPaths.SharedImages}/KCNA2.jpg`,
	},
	{
		title:
			"SD Times news digest: Codefresh Argo released, 42Crunch and Cisco partner to provide new API discovery tool, and IBM and Deloitte announce new managed analytics solution",
		link: "https://sdtimes.com/softwaredev/sd-times-news-digest-codefresh-argo-released-42crunch-and-cisco-partner-to-provide-new-api-discovery-tool-and-ibm-and-deloitte-announce-new-managed-analytics-solution/",
		mediaType: "News",
		image:
			"/assets/shared/resourcesPage/42Crunch-Codefresh.jpg",
	},
	{
		title:
			"42Crunch and Cisco Collaborate to Drive API Security Forward and to Increase Cloud Protection",
		link: "https://aithority.com/it-and-devops/cloud/42crunch-and-cisco-collaborate-to-drive-api-security-forward-and-to-increase-cloud-protection/",
		mediaType: "News",
		image:
			"/assets/shared/resourcesPage/42Crunch-Drive-Forward.jpg",
	},
	{
		title:
			"42Crunch collaborates with Cisco to drive API security and improve cloud protection",
		link: "https://www.helpnetsecurity.com/2021/10/12/42crunch-cisco/",
		mediaType: "News",
		image:
			"/assets/shared/resourcesPage/42Crunch-Drive.jpg",
	},
	{
		title:
			"42Crunch-Cisco collaboration to focus on API security",
		link: "https://www.scmagazine.com/news/cloud-security/42crunch-cisco-to-focus-on-api-security",
		mediaType: "News",
		image:
			"/assets/shared/resourcesPage/42Crunch-Focus.jpg",
	},
	{
		title:
			"APIClarity Demo - Wireshark your service mesh APIs for free",
		link: "https://www.youtube.com/watch?v=mVp2f9ByrVA",
		mediaType: "Video",
		image: "/assets/shared/apiclarity-demo-thumb.webp",
	},
	{
		title:
			"CNCF Live Webinar: Introduction to APIClarity – A Wireshark for APIs",
		link: "https://www.youtube.com/watch?v=2vYdWf5hjNU",
		mediaType: "Webinar",
		image: "/assets/shared/cncf-webinar-thumb.jpg",
	},
];
