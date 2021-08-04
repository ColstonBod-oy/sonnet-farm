const mapouterStyle = {
	position: "relative",
	textAlign: "right",
	height: "100%",
	width: "100%",
};

const gmap_canvasStyle = {
	overflow: "hidden",
	background: "none!important",
	height: "100%",
	width: "100%",
};

function AboutMap() {
	return (
		<div className="mapouter" style={mapouterStyle}>
			<div className="gmap_canvas" style={gmap_canvasStyle}>
				<iframe
					width="100%"
					height="100%"
					id="gmap_canvas"
					src="https://maps.google.com/maps?q=amocao%20store,%20Sablan,%20Benguet&t=k&z=13&ie=UTF8&iwloc=&output=embed"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
				></iframe>
				<br />
				<a href="https://www.embedgooglemap.net"></a>
			</div>
		</div>
	);
}

export default AboutMap;
