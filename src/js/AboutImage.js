import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import fern from "url:../images/fern.png";

function AboutImage() {
	return (
		<div className="about-image">
			<Image src={fern} fluid rounded />
			<span className="about-image-caption d-flex justify-content-evenly align-items-center">
				Like what you see?
				<Button variant="primary" className="about-image-button">
					See Gallery
				</Button>
			</span>
		</div>
	);
}

export default AboutImage;
