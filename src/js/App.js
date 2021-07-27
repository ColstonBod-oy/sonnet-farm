import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../css/App.css";
import Navigation from "./Navigation";
import Slider from "./Slider";
import Jumbotron from "./Jumbotron";
import About from "./About";
import AboutImage from "./AboutImage";
import ContactMap from "./ContactMap";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Container fluid>
				<Row>
					<Slider />
				</Row>
				<Row>
					<Jumbotron />
				</Row>
				<Row>
					<Col lg={6} className="px-0">
						<About />
					</Col>
					<Col lg={6}>
						<AboutImage />
					</Col>
				</Row>
				<Row>
					<ContactMap />
				</Row>
			</Container>
		</div>
	);
}

export default App;
