import { Feature } from "../../components";
import "./whatGPT3.css";
import React from "react";

const WhatGPT3 = () => {
	let featureOne = {
		title: "What is GPT-3",
		text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
	};
	let featureTwo = {
		title: "Chatbots",
		text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
	};
	let featureThree = {
		title: "Knowledgebase",
		text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
	};
	let featureFour = {
		title: "Education",
		text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
	};

	return (
		<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
			<div className="gpt3__whatgpt3-feature">
				<Feature title={featureOne.title} text={featureOne.text} />
			</div>
			<div className="gpt3__whatgpt3-heading">
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>
			<div className="gpt3__whatgpt3-container">
				<Feature title={featureTwo.title} text={featureTwo.text} />
				<Feature title={featureThree.title} text={featureThree.text} />
				<Feature title={featureFour.title} text={featureFour.text} />
			</div>
		</div>
	);
};

export default WhatGPT3;
