import React from "react";
//import ReactDOM from "react-dom";
//PAGINA MAGICA===========================

//https://hackerthemes.com/bootstrap-cheatsheet/#navbar

//============================
//include images into your bundle

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<div className="card-deck">
				<Card
					title="Gatito lloron"
					description="El famoso gatito gordo de los memes que sale llorando"
					image="https://i.pinimg.com/564x/72/5f/84/725f8484bc1567944c17b208b8871759.jpg"
					label="Ver más"
					link="https://www.pinterest.com/maggigizmo/memes-gatunos/"
				/>
				<Card
					title="Gatito Angry as fuck"
					description="El famoso gatito negro que con photoshop le pusieron brazos y piernitas"
					image="https://i.pinimg.com/564x/79/1c/18/791c184898f2701a7aa755143844d823.jpg"
					label="Ver más"
					link="https://www.pinterest.com/pin/37647346873701038/"
				/>
				<Card
					title="Gatito con Iphone"
					description="El famoso gatito que revisa el celular para ver cuantos likes tiene su foto pero tiene cero u.u"
					image="https://i.pinimg.com/564x/8c/b8/c9/8cb8c9dcc5beff1aec39c8675fb59ad3.jpg"
					label="Ver más"
					link="https://www.pinterest.com/pin/862931978590499433/"
				/>
				<Card
					title="El Hamster acosador"
					description="El famoso hamster que se queda viendo fijamente a la camara frontal"
					image="https://i.pinimg.com/564x/af/72/9d/af729d9799bf43b8eb5b072a930b7979.jpg"
					label="Ver más"
					link="https://www.youtube.com/watch?v=eXz_HCnzBAI&ab_channel=hurixPro"
				/>
			</div>
		</div>
	);
}
