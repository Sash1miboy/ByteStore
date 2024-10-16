import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="container mx-auto">
        <div className="logoPlacement">
          <Link to="/" className="link brandLogo font-black">
            BYTESTORE
          </Link>
        </div>

        <div className="hamburgerMenu" onClick={toggleMenu}>
          <img src="/hamburger-menu-icon.svg" alt="" />
        </div>

        <div className={`navItems ${isMenuOpen ? "open" : ""}`}>
          <div className="searchInput">
            <div className="searchBar">
              <img
                src="/search.svg"
                alt="search"
                className="searchIcon w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search PC Parts..."
                className="searchText px-10 py-1.5 border border-black rounded-md w-full"
              />
            </div>
          </div>

          <div className="tools">
            <Link to="#" className="link buildPC">
              <img src="/wrench-alt.svg" alt="wrench" className="w-6 h-6" />
              Build PC
            </Link>
            <hr />
            <div className="linkItems">
              <Link to="#" className="link navIcon">
                <img src="/bell.svg" alt="notification" className="w-6 h-6" />
              </Link>
              <Link to="#" className="link navIcon">
                <img src="/shopping-cart.svg" alt="cart" className="w-6 h-6" />
              </Link>
              <Link to="#" className="link navIcon">
                <img src="/comments.svg" alt="chat" className="w-6 h-6" />
              </Link>
            </div>
            <hr />
            <div className="linkRedirect">
              <button
                type="button"
                className="text-white bg-[#02A9F7] hover:bg-[#0291D7] font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Login
              </button>
              <button
                type="button"
                className="text-white bg-[#02A9F7] hover:bg-[#0291D7] font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
