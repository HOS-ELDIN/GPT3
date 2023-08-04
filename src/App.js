import "./App.css";
import {
	Blog,
	Features,
	Footer,
	Header,
	Possibility,
	WhatGPT3,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
	return (
		<main className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</main>
	);
}

export default App;
