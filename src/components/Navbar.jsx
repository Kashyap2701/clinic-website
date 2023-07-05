import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Container = styled.div`
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;

const NavbarContainer = styled.nav`
  padding: 0.5rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.li`
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const NavLinkText = styled.a`
  color: #3f3f3f;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
    text-decoration: underline;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--primary-color);
  margin-bottom: 4px;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <NavbarContainer>
        <Logo src={logo} alt="Logo" />
        <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
          <NavLink>
            <NavLinkText href="#">Home</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText href="#">Blogs & Articles</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText href="#">About Us</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText href="#">Contact Us</NavLinkText>
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
