import React from "react";
import "./card.css";
import CoverFlowCarousel from "../swiper/CoverFlowCarousel";
const Card = (props) => {
	return (
		<div className="card-padder row mt-5" key={props.id}>
			<div className="card">
				<div className="card-header card-header-right-border">
					<div className="card-header_caption">
						<div className="card-header_caption-title">
							<div className="card-header_caption-text">{props.title}</div>
						</div>
					</div>
					<div className="card-header_tools">
						<a href="#">مشاهده همه</a>
					</div>
				</div>
				<div >
					<CoverFlowCarousel />
				</div>
			</div>
		</div>
	);
};

export default Card;
