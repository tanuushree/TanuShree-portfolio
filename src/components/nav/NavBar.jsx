import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h1>Tanu</h1>
			<nav ref={navRef}>
				<a href="#home">Home</a>
				<a href="#aboutme">About me</a>
				<a href="#mywork">My work</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;