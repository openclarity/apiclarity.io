import React from "react";
import Head from "next/head";
import styles from "../styles/layout/Layout.module.scss";
import Navbar from "./globals/Navbar";
import Footer from "./globals/Footer";
import { NextSeo } from "next-seo";

export const siteTitle = "APIClarity";

const Layout = ({
	pageTitle,
	pagePath,
	children,

}: {
		pageTitle?: string;
		pagePath?: string;
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<div className={styles.LayoutContainer}>
			<Head>
				<link
					rel="icon"
					href="/assets/shared/logos/logo-favicon.png"
				/>
				{/* <title>APIClarity</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="Open source for API traffic observability in K8s clusters"
				/>
				<meta
					property="og:image"
					content={`https://apiclarity.io/assets/shared/logos/logo-dark-vertical-2x.png`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:description"
					content="Open source for API traffic observability in K8s clusters"
				/>
				<meta
					name="twitter:image"
					content="https://apiclarity.io/assets/shared/logos/logo-dark-vertical-2x.png"
				/> */}

				{/*<!--Tracking Code Start of HubSpot Embed Code -->*/}
				{/* <script
					type="text/javascript"
					id="hs-script-loader"
					async
					defer
					src="//js.hs-scripts.com/19886599.js"
				></script> */}
				{/*<!--Tracking Code End of HubSpot Embed Code -->*/}
			</Head>
			<NextSeo
				title={`APIClarity | ${pageTitle}`}
				description="Open source for API traffic visibility in K8s clusters"
				canonical={`https://apiclarity.io${pagePath || ""}`}
				openGraph={{
					url: `https://apiclarity.io${pagePath || ""}`,
					title: `APIClarity | ${pageTitle}`,
					description:
						"Open source for API traffic visibility in K8s clusters",
					images: [
						{
							url: "https://apiclarity.io/assets/shared/logos/logo-dark-vertical-2x.png",
							alt: "APIClarity Logo",
							type: "image/png",
							width: 222,
							height: 121
						},
					],
					site_name: "APIClarity",
				}}
				twitter={{
					handle: "@ciscoemerge",
					site: "@ciscoemerge",
					cardType: "summary_large_image"
				}}
			/>
			<main className={styles.Layout}>
				<Navbar />
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
