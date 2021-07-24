import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "url:../images/slide1.png";
import slide2 from "url:../images/slide2.png";
import slide3 from "url:../images/slide3.png";

function Slider() {
	return (
		<Container fluid>
			<Row className="slider-row">
				<Col>
					<div className="d-flex flex-column h-100">
						<Row>
							<Carousel className="px-0">
								<Carousel.Item interval={1000}>
									<img
										className="d-block w-100"
										src={slide1}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>Organically Grown Pineapples</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item interval={500}>
									<img
										className="d-block w-100"
										src={slide2}
										alt="Second slide"
									/>
									<Carousel.Caption>
										<h3>Stress-Free Raised Pigs</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={slide3}
										alt="Third slide"
									/>
									<Carousel.Caption>
										<h3>Free Range Chickens</h3>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Row>
						<Row className="flex-grow-1">
							<div className="jumbotron">
								<h4 className="jumbotron-display mb-3">Fluid jumbotron</h4>
								<p className="jumbotron-lead mb-1">
									Now imagine how this would look with some actual content in
									here, rather than just this boring placeholder text that goes
									on and on, but actually conveys no tangible information at. It
									simply takes up space and should not really be read.
								</p>
								<p className="jumbotron-lead">
									And yet, here you are, still persevering in reading this
									placeholder text, hoping for some more insights, or some
									hidden easter egg of content. A joke, perhaps. Unfortunately,
									there's none of that here.
								</p>
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Slider;
