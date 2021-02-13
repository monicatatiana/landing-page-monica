import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card">
			<div className="card-body">
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">{props.description}</p>
				<a href={props.link} className="btn btn-warning">
					{props.label}
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	label: PropTypes.string
};
