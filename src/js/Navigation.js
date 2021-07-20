import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "url:../logo.svg";

function Navigation() {
	return (
		<React.Fragment>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						React Bootstrap
					</Navbar.Brand>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;
