import React from 'react';
import { styled } from 'styled-components'
import footerimg from '../assets/static/s.png';

export const Footer = () => {
  return (
    <FooterContainer>
        <img src={footerimg} alt="" />
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
`;
