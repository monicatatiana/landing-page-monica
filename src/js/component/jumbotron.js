import React from "react";

export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Bienvenido a memes de animales</h1>
			<p className="lead">
				Aqui veras algunos de los memes más famosos de gatos y otros
				animales otros.
			</p>
			<hr className="my-4" />
			<p>Disfruta del contenido de los memes de gatos</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="https://www.pinterest.es/search/pins/?q=memes%20animal&rs=typed&term_meta[]=memes%7Ctyped&term_meta[]=animal%7Ctyped"
					role="button">
					Ver mas
				</a>
			</p>
		</div>
	);
};
