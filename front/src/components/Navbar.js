import {useRef} from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import logo from '../logo.png';
import "../Styles/main.css"

//<img src={logo} className="logo" alt="logo" />


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<img src={logo} className="logo" alt="logo" />
			<nav ref={navRef}>
				<a href="/#">Acceuil</a>
				<a href="/#">Inscription</a>
				<a href="http://localhost:3000/pageLogin">Connexion</a>
				<a href="/#">Contacts</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;