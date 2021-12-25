import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
	DocsContextProvider,
	useDocsContext,
} from "../context/docs-context";
import styles from "../styles/pages/DocsPage.module.scss";
import { DocsSections } from "../types/enums";

const docs = () => {
	return (
		<DocsContextProvider>
			<Layout pageTitle="Documentation" pagePath="/docs">
					<h1 style={{color: "transparent", height: "0px"}}>Documentation</h1>
				<div className={styles.DocsPage}>
					<TOCSection />
					<ContentSection />
				</div>
			</Layout>
		</DocsContextProvider>
	);
};

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

const ContentSection = () => {
	const {
		challenges,
		solution,
		building,
		installationk8s,
	} = useDocsContext();
	return (
		<div className={styles.ContentSection}>
			<h3 className={styles.ContentSectionHeader}>
				APIClarity
			</h3>
			<p className={styles.ContentSectionSubheader}>
				Open source for API traffic visibility in K8s
				clusters
			</p>
			<TopicSection
				reference={challenges}
				header={DocsSections.Challenges}
			>
				<Challenges />
			</TopicSection>
			<TopicSection
				reference={solution}
				header={DocsSections.Solution}
			>
				<Solution />
			</TopicSection>
			<TopicSection
				reference={building}
				header={DocsSections.Building}
			>
				<Building />
			</TopicSection>
			<TopicSection
				reference={installationk8s}
				header={DocsSections.Installation}
			>
				<Installation />
			</TopicSection>
		</div>
	);
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

const Challenges = () => {
	return (
		<div>
			<p className={styles.DocsPageParagraph}>
				Microservice applications interact via API’s with
				many other applications. To minimize risk, it is
				valuable to have visibility to the OpenAPI
				specifications and to understand any potential
				changes to that specification throughout the
				application lifecycle. However, obtaining OpenAPI
				specs can be challenging, particularly for external
				or legacy applications.
			</p>
			<p className={styles.DocsPageParagraph}>
				Proper OpenAPI specifications can be further
				complicated by microservices that use deprecated
				APIs (a.k.a. Zombie APIs)​ or microservices that use
				undocumented APIs (a.k.a. Shadow APIs).
			</p>
			<p className={styles.DocsPageParagraph}>
				Finally, it’s important to be able to obtain Open
				API specifications without code instrumentation or
				modifying existing workloads.
			</p>
		</div>
		// <ul className={styles.DocsPageList}>
		// 	<li className={styles.DocsPageListItem}>
		// 		Not all applications have their Open API
		// 		specification available.​
		// 	</li>
		// 	<li className={styles.DocsPageListItem}>
		// 		How can we get this for our legacy or external
		// 		applications?​
		// 	</li>
		// 	<li className={styles.DocsPageListItem}>
		// 		Ability to detect that microservices still use
		// 		deprecated APIs (a.k.a. Zombie APIs)​
		// 	</li>
		// 	<li className={styles.DocsPageListItem}>
		// 		Ability to detect that microservices use
		// 		undocumented APIs (a.k.a. Shadow APIs)​
		// 	</li>
		// 	<li className={styles.DocsPageListItem}>
		// 		Ability to get Open API specifications without code
		// 		instrumentation or modifying existing workloads
		// 		(seamless documentation)
		// 	</li>
		// </ul>
	);
};

const Solution = () => {
	return (
		<>
			<ul className={styles.DocsPageList}>
				<li className={styles.DocsPageListItem}>
					Capture all API traffic in an existing environment
					using a service-mesh framework​
				</li>
				<li className={styles.DocsPageListItem}>
					Construct the OpenAPI specification by observing
					the API traffic
				</li>
				<li className={styles.DocsPageListItem}>
					Allow the User to upload OpenAPI spec, review,
					modify and approve generated OpenAPI specs​
				</li>
				<li className={styles.DocsPageListItem}>
					Alert the user on any difference between the
					approved API specification and the one that is
					observed in runtime, detects shadow & zombie
					APIs​​
				</li>
				<li className={styles.DocsPageListItem}>
					UI dashboard to audit and monitor the API findings
				</li>
			</ul>
			<img
				src="/assets/shared/apiclarity-docs-diagram.jpeg"
				alt="diagram for docs"
				className={styles.DocsPageImage}
			/>
		</>
	);
};

const Building = () => {
	return (
		<>
			<p className={styles.DocsPageSectionSubheader}>
				Building UI and backend in Docker
			</p>
			<pre className={styles.DocsPageCodeBlock}>
				<code>
					<p className={styles.DocsPageCodeBlockLine}>
						docker build -t {"<your repo>"}
						/api-clarity .
					</p>
					<p className={styles.DocsPageCodeBlockLine}>
						docker push {"<your repo>"}/apiclarity
					</p>
					<p className={styles.DocsPageCodeBlockLine}>
						<span
							className={
								styles.DocsPageCodeBlockLineCommented
							}
						>
							# Modify the image name of the apiclarity
							deployment in ./deployment/apiclarity.yaml
						</span>
					</p>
				</code>
			</pre>
			<p className={styles.DocsPageSectionSubheader}>
				Building UI
			</p>
			<pre className={styles.DocsPageCodeBlock}>
				<code>
					<p className={styles.DocsPageCodeBlockLine}>
						make ui
					</p>
				</code>
			</pre>
			<p className={styles.DocsPageSectionSubheader}>
				Building Backend
			</p>
			<pre className={styles.DocsPageCodeBlock}>
				<code>
					<p className={styles.DocsPageCodeBlockLine}>
						make backend
					</p>
				</code>
			</pre>
		</>
	);
};

const Installation = () => {
	return (
		<>
			<ol className={styles.DocsPageList}>
				<li className={styles.DocsPageListItemOrdered}>
					Make sure that Istio is installed and running in
					your cluster: (
					<a
						className={styles.DocsPageLink}
						href="https://istio.io/latest/docs/setup/getting-started/#install"
					>
						Official installation instructions
					</a>
					).
				</li>

				<li className={styles.DocsPageListItemOrdered}>
					Deploy APIClarity in K8s (will be deployed in a
					new namespace named apiclarity):
				</li>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							kubectl apply -f deployment/apiclarity.yaml
						</p>
					</code>
				</pre>
				<li className={styles.DocsPageListItemOrdered}>
					Check that APIClarity is running:
				</li>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							kubectl get pods -n apiclarity
						</p>
						<div
							className={styles.DocsPageCodeBlockLineGrid}
						>
							<span>NAME</span>
							<span>READY</span>
							<span>STATUS</span>
							<span>RESTARTS</span>
							<span>AGE</span>
						</div>
						<div
							className={styles.DocsPageCodeBlockLineGrid}
						>
							<span>apiclarity-5df5fd6d98-h8v7t</span>
							<span>1/1</span>
							<span>Running</span>
							<span>2</span>
							<span>15m</span>
						</div>
						<div
							className={styles.DocsPageCodeBlockLineGrid}
						>
							<span>mysql-6ffc46b7f-bggrv</span>
							<span>1/1</span>
							<span>Running</span>
							<span>0</span>
							<span>15m</span>
						</div>
					</code>
				</pre>
				<li className={styles.DocsPageListItemOrdered}>
					Deploy the Envoy WASM filter for capturing the
					traffic:
				</li>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							git submodule init wasm-filters
						</p>
						<p className={styles.DocsPageCodeBlockLine}>
							git submodule update wasm-filters
						</p>
						<p className={styles.DocsPageCodeBlockLine}>
							cd wasm-filters
						</p>
					</code>
				</pre>
				<li className={styles.DocsPageListItemOrdered}>
					Run the WASM deployment script for selected
					namespaces to allow traffic tracing. The script
					will automatically:
				</li>
				<ul>
					<li className={styles.DocsPageListItem}>
						Deploy the WASM filter binary as a config map.
					</li>
					<li className={styles.DocsPageListItem}>
						Deploy the Istio Envoy filter to use the WASM
						binary.
					</li>
					<li className={styles.DocsPageListItem}>
						Patch all deployment annotations within the
						selected namespaces to mount the WASM binary.
					</li>
				</ul>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							./deploy.sh {"<namespace1>"} {"<namespace2>"}{" "}
							...
						</p>
					</code>
				</pre>
				<p className={styles.DocsPageParagraph}>
					Note: To build the WASM filter instead of using
					the pre-built binary, please follow the
					instructions on{" "}
					<a
						className={styles.DocsPageLink}
						href="https://github.com/apiclarity/wasm-filters"
					>
						wasm-filters
					</a>
				</p>
				<li className={styles.DocsPageListItemOrdered}>
					Port forward to APIClarity UI:
				</li>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							kubectl port-forward -n apiclarity
							svc/apiclarity 9999:8080
						</p>
					</code>
				</pre>
				<li className={styles.DocsPageListItemOrdered}>
					Open APIClarity UI in the browser:{" "}
					<a
						className={styles.DocsPageLink}
						href="http://localhost:9999"
					>
						http://localhost:9999
					</a>
				</li>
				<li className={styles.DocsPageListItemOrdered}>
					Generate some traffic in the applications (e.g.{" "}
					<a
						className={styles.DocsPageLink}
						href="https://microservices-demo.github.io/docs/quickstart.html"
					>
						sock-shop-demo
					</a>
					) in the traced namespaces and check APIClarity UI
					:)
				</li>
			</ol>
			<p className={styles.DocsPageSectionSubheader}>
				Running locally with demo data
			</p>
			<ol className={styles.DocsPageList}>
				<li className={styles.DocsPageListItemOrdered}>
					Build UI & backend locally as described above:
				</li>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							make ui && make backend
						</p>
					</code>
				</pre>
				<li className={styles.DocsPageListItemOrdered}>
					Copy the built site:
				</li>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							cp -r ./ui/build ./site
						</p>
					</code>
				</pre>
				<li className={styles.DocsPageListItemOrdered}>
					Run backend and frontend locally using demo data:
				</li>
				<pre className={styles.DocsPageCodeBlock}>
					<code>
						<p className={styles.DocsPageCodeBlockLine}>
							FAKE_TRACES=true
							FAKE_TRACES_PATH=./backend/pkg/test/trace_files
							ENABLE_DB_INFO_LOGS=true ./backend/bin/backend
							run
						</p>
					</code>
				</pre>
				<li className={styles.DocsPageListItemOrdered}>
					Open APIClarity UI in the browser:{" "}
					<a
						className={styles.DocsPageLink}
						href="http://localhost:8080"
					>
						http://localhost:8080
					</a>
				</li>
			</ol>
		</>
	);
};

const OverviewSection = () => {
	return (
		<>
			<p className={styles.OverviewSectionHeader}>
				The OpenAPI Specification, is a specification for
				machine-readable interface files for describing,
				producing, consuming, and visualizing RESTful web
				services. However, there are a few challenges:
			</p>
			<ul className={styles.OverviewSectionList}>
				<li className={styles.OverviewSectionListItem}>
					Not all applications have an OpenAPI Spec
					available (legacy, external)
				</li>
				<li className={styles.OverviewSectionListItem}>
					Differences between the OpenAPI Spec and how the
					application actually runs can develop over time.
					Additionally, there is potential that an
					enterprise will have:
				</li>
				<ul className={styles.OverviewSectionList}>
					<li className={styles.OverviewSectionListItem}>
						Zombie APIs – deprecated API’s that are still
						running somewhere.
					</li>
					<li className={styles.OverviewSectionListItem}>
						Shadow APIs – undocumented APIs, or those that
						don’t follow an enterprise deployment process.
					</li>
				</ul>
				<li className={styles.OverviewSectionListItem}>
					Obtaining OpenAPI Specifications without code
					instrumentation or modifying existing workloads.
				</li>
			</ul>
			<p className={styles.OverviewSectionHeader}>
				What APIClarity will provide is:
			</p>
			<ul>
				<li className={styles.OverviewSectionListItem}>
					The ability to provide all API traffic in an
					environment using a Service-Mesh framework
				</li>
				<li className={styles.OverviewSectionListItem}>
					An interface to upload an API Spec, review,
					modify, and approve that specification.
				</li>
				<li className={styles.OverviewSectionListItem}>
					By observing all traffic within the Service-Mesh,
					the ability to “re-construct” the OpenAPI
					specification
				</li>
				<li className={styles.OverviewSectionListItem}>
					Alerting capabilities to notify the user of any
					differences between the approved API specification
					and the one that is observed in runtime, as well
					as detect shadow and Zombie APIs
				</li>
				<li className={styles.OverviewSectionListItem}>
					A UI dashboard to audit and monitor findings.
				</li>
			</ul>
		</>
	);
};

export default docs;
