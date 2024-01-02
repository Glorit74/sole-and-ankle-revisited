/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenuByJosh = ({ isOpen, onDismiss }) => {
  return (
    <Placer isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
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
      </Content>
    </Placer>
  );
};

const Placer = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100vh;
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

export default MobileMenuByJosh;
