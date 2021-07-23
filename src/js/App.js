import React from "react";
import "./../css/App.css";
import Navigation from "./Navigation";
import Slider from "./Slider";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Slider />
			<header className="App-header">
				<h1>React App</h1>
			</header>
		</div>
	);
}

export default App;
