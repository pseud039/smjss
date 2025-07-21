import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggle() {
    setMenuOpen((prevMenuOption) => !prevMenuOption);
  }

  return (
    <header>
      <nav className="w-full flex items-center justify-between pt-[18px] pb-[18px] px-4 sm:px-6 md:px-10 lg:px-28 border-b border-solid bg-white backdrop-blur-sm">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--color-primary-text)] font-bold"
        >
          <img src={logo} alt="logo" className="w-[70px] h-[50px]" />
          <span className="hidden md:block text-lg">
            Sanvi Mahila Jan Seva Sansthan
          </span>
          <span className="block md:hidden text-xl">SSMJ</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[var(--color-secondary-text)]">
          <Link
            to="/"
            className="hover:text-[var(--color-primary-text)] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-[var(--color-primary-text)] transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/media"
            className="hover:text-[var(--color-primary-text)] transition-colors"
          >
            Media
          </Link>
          <Link
            to="/contact"
            className="hover:text-[var(--color-primary-text)] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right Section - Donate Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/donate">
            <button className="btn-navbar">Donate</button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggle}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="flex flex-col px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block py-2 px-3 text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-gray-50 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="block py-2 px-3 text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-gray-50 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/media"
              className="block py-2 px-3 text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-gray-50 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Media
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-3 text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-gray-50 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
