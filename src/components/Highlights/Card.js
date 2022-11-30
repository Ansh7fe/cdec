import React from "react";

function Card ({ name, link }) {
	return (
		<div>
			<div className="highlightCard">
				<div className="Event">
					<div className="cover">
						<img src='../../assets/imageDir.png' />
					</div>

					<div className="banner">
						<div className="banner_content">{name}</div>
					</div>
					<div className="banner_hover">
						<div className="banner_content_hover">
							{" "}
							PODCAST WITH OUR DIRECTOR
						</div>
						<div className="watch_btn">
							<a href={link} className="btn_text">Watch Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;