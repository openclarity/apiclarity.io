import React from "react";
import ReactPlayer from "react-player";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/QAVideo.module.scss";

const QAVideo = () => {
	return (
		<Layout
			pageTitle="Q&A Session with Justin Cohen"
			pagePath="/resources/q-and-a-video"
		>
			<div className={styles.Section}>
				<h1>Q&A Session with Justin Cohen</h1>
				<div className={styles.SectionVideoContainer}>
					<ReactPlayer
						url={"/assets/shared/resourcesPage/QA-Video.mp4"}
						className={styles.SectionVideo}
						width="100%"
						height="100%"
						controls={true}
                        playing={true}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default QAVideo;
