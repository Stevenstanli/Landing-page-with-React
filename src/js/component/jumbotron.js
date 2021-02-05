import React from "react";
import PropTypes from "prop-types";

const Jumbotron = props => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4 font-weight-normal">
				{" "}
				{props.titlejumbo}
			</h1>
			<p className="lead">{props.descriptionjumbo}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURLjumbo}
				role="button">
				{props.buttonLabeljumbo}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	titlejumbo: PropTypes.string,
	descriptionjumbo: PropTypes.string,
	buttonURLjumbo: PropTypes.string,
	buttonLabeljumbo: PropTypes.string
};
export default Jumbotron;
