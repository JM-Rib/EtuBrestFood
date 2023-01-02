import {useRef} from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import logo from '../logo.png';

function Navbar(){
    const navRef = useRef();

    return(
        <header>
            <img src={logo} className="logo" alt="logo" />
            <nav ref={navRef}>
                <a href='/#'>Acceuil</a>
                <a href='/#'>Inscription</a>
                <a href='/#'>Connexion</a>
                <a href='/#'>Contacts</a>
                <button>
                    <FaTimes />
                </button>
            </nav>
            <button>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;