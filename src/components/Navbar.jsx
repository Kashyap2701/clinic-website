import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Container,
  NavbarContainer,
  NavLink,
  NavLinkText,
  NavLinks,
  Logo,
  HamburgerIcon,
  HamburgerLine,
} from "../CSS/Navbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <NavbarContainer>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
          <NavLink>
            <NavLinkText>
              <Link to="/">Home</Link>
            </NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>
              <Link to="/blogs">Blogs & Articles</Link>
            </NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>
              <Link to="/about-us">About Us</Link>
            </NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>
              <Link to="/contact-us">Contact Us</Link>
            </NavLinkText>
          </NavLink>
        </NavLinks>
        <HamburgerIcon onClick={handleMobileMenuToggle}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerIcon>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
