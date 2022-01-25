import useWindowSize from "../../hooks/useWindowSize";
import CustomImage from "../reusables/CustomImage";
import styles from '../../styles/components/EventSection.module.scss';
import { CustomLink } from "../reusables/Button";
import { EButtonType } from "../../types/enums";
import { IEventColumn } from "../../types/types";
import { cilApiclarityColumn } from "../../data/cilApiClarityColumn";

export const EventSection = ({ image }: { image: string;}) => {
	const windowSize = useWindowSize();

	return (
		<div className={styles.Event}>
			<CustomImage
				styleName={styles.EventBgImage}
				src={`/assets/shared/events/Event-${
					windowSize.width > 1024
						? "1440"
						: windowSize.width > 900
						? "1024"
						: windowSize.width > 500
						? "768"
						: windowSize.width > 320
						? "414"
						: "320"
				}-bg.png`}
				alt="event background"
				fullWidth
			/>
			<div className={styles.EventContent}>
				<h4 className={styles.EventContentHeader}>
					Cisco Innovation Labs Challenge: APIClarity
					Edition
				</h4>
				<div className={styles.EventContentColumnContainer}>
					{cilApiclarityColumn.map((data, i) => {
						return (
							<EventContentColumn
								columnData={data}
								key={i}
							/>
						);
					})}
				</div>
			</div>
			<img
				className={styles.EventImage}
				src={`/assets/shared/events/${image}`}
				alt="kubecon image"
			/>
		</div>
	);
};

const EventContentColumn = ({
	columnData,
}: {
	columnData: IEventColumn;
}) => {
	return (
		<div className={styles.EventContentColumn}>
			<p className={styles.EventContentColumnHeader}>
				{columnData.title}
			</p>
			<p className={styles.EventContentColumnText}>
				{columnData.text}
			</p>
			{columnData.eventDetails ? (
				<>
					<div
						className={styles.EventContentColumnDivider}
					/>
					{columnData.eventDetails.map((event, i) => (
						<p
							key={i}
							className={styles.EventContentColumnDetails}
						>
							<span>{event.name}</span> {event.date}
						</p>
					))}
				</>
			) : null}
			<div
				className={
					styles.EventContentColumnButtonContainer
				}
			>
				<CustomLink
					buttonType={EButtonType.TextLarge}
					openNewWindow={false}
					text={columnData.link.text}
					link={columnData.link.address}
				/>
			</div>
		</div>
	);
};
