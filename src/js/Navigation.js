import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "url:../logo.svg";

function Navigation() {
	return (
		<React.Fragment>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="66.72"
							height="51.04"
							className="d-inline-block align-middle"
						/>{" "}
						<span className="navbar-brand-text">Sonnet Farm</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto text-center">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link href="#gallery">Gallery</Nav.Link>
							<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;
