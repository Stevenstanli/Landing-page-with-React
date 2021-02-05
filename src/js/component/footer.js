import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="blockquote-footer text-center bg-dark text-white p-5">
			{props.Copy}
			<cite title="Source Title">{props.Web}</cite>
		</footer>
	);
};

Footer.propTypes = {
	//proptypes here
	Copy: PropTypes.string,
	Web: PropTypes.string
};

export default Footer;
