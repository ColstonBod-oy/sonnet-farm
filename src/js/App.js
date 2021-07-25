import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../css/App.css";
import Navigation from "./Navigation";
import Slider from "./Slider";
import Jumbotron from "./Jumbotron";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Container fluid>
				<Row className="homepage-row">
					<Col>
						<Row>
							<Slider />
						</Row>
						<Row>
							<Jumbotron />
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
