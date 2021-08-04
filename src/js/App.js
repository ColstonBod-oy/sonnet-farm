import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../css/App.css";
import Navigation from "./Navigation";
import Slider from "./Slider";
import Jumbotron from "./Jumbotron";
import About from "./About";
import AboutMap from "./AboutMap";
import AboutImage from "./AboutImage";
import Footer from "./Footer";

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
					<h3 className="about-title mb-4">About</h3>
					<Col lg={6}>
						<Row>
							<Col xs={12}>
								<About />
							</Col>
							<Col xs={12} className="about-map">
								<AboutMap />
							</Col>
						</Row>
						<p className="about-map-caption">
							Sonnet Farm is located near "Amocao Store, Sablan, Benguet"
						</p>
					</Col>
					<Col lg={6} className="d-lg-flex align-items-center">
						<AboutImage />
					</Col>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default App;
