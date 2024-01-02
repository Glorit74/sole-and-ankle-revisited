import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, VIEWPORT } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header style={{ position: "relative" }}>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SmallNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
            <VisuallyHidden>Shopping bag</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
            <VisuallyHidden>Close</VisuallyHidden>
          </UnstyledButton>
        </SmallNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  
  @media (max-width: ${VIEWPORT.laptop}) {
	  border-top: 4px solid ${COLORS.gray[900]};
	  justify-content: space-between;
	  align-items: center;
	
  }

  @media (max-width: ${VIEWPORT.tablet}) {
    padding: 18px 32px;
  }

  @media (max-width: ${VIEWPORT.phone}) {
    padding: 18px 12px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  /* margin: 0px 48px; */
  margin-right: auto;
  margin-left: 48px;
  @media (max-width: ${VIEWPORT.laptop}) {
    display: none;
  }
`;

const SmallNav = styled.div`
  display: none;
  @media (max-width: ${VIEWPORT.laptop}) {
    display: flex;
    gap: 4rem;
  }
  @media (max-width: ${VIEWPORT.phone}) {
    gap: 2rem;
  }
`;

const Side = styled.div`
  margin-right: auto;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
