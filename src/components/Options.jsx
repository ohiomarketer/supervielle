import React from 'react'
import optionsimage from '../assets/static/image.png'
import { styled } from 'styled-components';

export const Options = () => {
  return (
    <OptionsContainer>
        <img src={optionsimage} alt="" />
    </OptionsContainer>
  )
}

const OptionsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
    img {
        width: 100%;
        height: 100%;
    }
`;
