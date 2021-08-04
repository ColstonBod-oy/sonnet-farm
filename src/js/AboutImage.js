import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import fern from "url:../images/fern.png";

function AboutImage() {
	return (
		<div className="about-image d-flex flex-column justify-content-center d-lg-block">
			<Image src={fern} fluid rounded thumbnail />
			<span className="about-image-caption d-flex justify-content-center align-items-center">
				Like what you see?
				<Button variant="primary" className="about-image-button">
					View Gallery
				</Button>
			</span>
		</div>
	);
}

export default AboutImage;
