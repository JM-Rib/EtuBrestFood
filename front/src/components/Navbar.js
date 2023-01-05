import {useRef} from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import logo from '../logo.png';
//import "../Styles/navbar.css"

//<img src={logo} className="logo" alt="logo" />


function Navbar(props) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<div className="Navbar">
			<header className="Navbar-header">
				<img src={logo} className="logo" alt="logo" />
				<nav ref={navRef}>
					<a href="/#">Acceuil</a>
					{props.idCompte == null ? (<a href="http://localhost:3000/pageInscription">Inscription</a>) : (<a href="http://localhost:3000/pagePaniers">Paniers</a>)}
					{props.idCompte == null ? (<a href="http://localhost:3000/pageLogin">Connexion</a>) : (<a href="http://localhost:3000/pageLogout">Deconnexion</a>)}
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
		</div>
	);
}

export default Navbar;