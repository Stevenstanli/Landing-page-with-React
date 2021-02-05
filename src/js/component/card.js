import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card m-5">
			<img
				className="card-img-top"
				src={props.imageUrlcard}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.titlecard}</h5>
				<p className="card-text">{props.descriptioncard}</p>
				<a href={props.buttonUrlcard} className="btn btn-primary">
					{props.buttonLabelcard}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	//proptypes here
	imageUrlcard: PropTypes.string,
	titlecard: PropTypes.string,
	descriptioncard: PropTypes.string,
	buttonUrlcard: PropTypes.string,
	buttonLabelcard: PropTypes.string
};

export default Card;
