import React from 'react';
import { styled } from 'styled-components'
import footerimg from '../assets/static/footer.png';

export const Footer = () => {
  return (
    <FooterContainer>
        <img src={footerimg} alt="" />
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
`;
