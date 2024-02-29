import React from 'react';
import { styled } from 'styled-components'
import inicio from '../assetes/static/inicio.png'
import tarjetas from '../assetes/static/tarjetas.png'
import qr from '../assetes/static/qr.png'
import prestamos from '../assetes/static/prestamos.png'
import menu from '../assetes/static/menu.png'

export const Footer = () => {
  return (
    <FooterContainer>
        <div className='img-container'>
            <img src={inicio} alt="inicio" />
        </div>
        <div className='img-container'>
            <img src={tarjetas} alt="tarjetas" />
        </div>
        <div className='container special'>
            <div className='img-container special'>
                <img src={qr} alt="qr" />
            </div>
            <p> Pago con QR</p>
        </div>
        <div className='img-container'>
            <img src={prestamos} alt="prestamos" />
        </div>
        <div className='img-container'>
            <img src={menu} alt="menu" />
        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`

`;
