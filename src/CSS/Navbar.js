import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;

export const NavbarContainer = styled.nav`
  padding: 0.5rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const NavLinks = styled.ul`
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

export const NavLink = styled.li`
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const NavLinkText = styled.a`
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

export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const HamburgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--primary-color);
  margin-bottom: 4px;
`;