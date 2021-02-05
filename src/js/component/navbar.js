import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				{props.Bootstrap}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							{props.Principal}
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.About}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.Services}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.Contact}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	//proptypes here
	Bootstrap: PropTypes.string,
	Principal: PropTypes.string,
	About: PropTypes.string,
	Services: PropTypes.string,
	Contact: PropTypes.string
};
export default Navbar;
