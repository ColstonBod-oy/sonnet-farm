import Carousel from "react-bootstrap/Carousel";
import slide1 from "url:../images/slide1.png";
import slide2 from "url:../images/slide2.png";
import slide3 from "url:../images/slide3.png";

function Slider() {
	return (
		<Carousel className="px-0">
			<Carousel.Item interval={1000}>
				<img className="d-block w-100" src={slide1} alt="First slide" />
				<Carousel.Caption>
					<h3>Organically Grown Pineapples</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img className="d-block w-100" src={slide2} alt="Second slide" />
				<Carousel.Caption>
					<h3>Stress-Free Raised Pigs</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={slide3} alt="Third slide" />
				<Carousel.Caption>
					<h3>Free Range Chickens</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slider;
