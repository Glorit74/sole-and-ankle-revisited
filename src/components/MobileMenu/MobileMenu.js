/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, VIEWPORT, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Placer>
      <Shadow></Shadow>
      <Wrapper>
        <CloseButton>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id="close" onClick={onDismiss}></Icon>
        </CloseButton>
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </Wrapper>
    </Placer>
  );
};

const Placer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
`;

const Shadow = styled.div`
  background-color: black;
  opacity: 0.6;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 300px;
  background-color: ${COLORS.white};
  padding: 10px 0px 32px 32px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  /*bigger touching size for finger*/
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: calc(22 / 16 * 1rem);
`;

const Footer = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: calc(14 / 16 * 1rem);
  margin-bottom: -calc(14 / 16 * 1rem);
`;

const Link = styled.a`
  font-size: calc(18 / 16 * 1rem);
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;

  :first-child {
    color: ${COLORS.secondary};
  }

  ${Footer} & {
    font-size: calc(14 / 16 * 1rem);
    text-transform: none;
    color: ${COLORS.gray[700]};
    font-weight: ${WEIGHTS.normal};
  }
`;

export default MobileMenu;
