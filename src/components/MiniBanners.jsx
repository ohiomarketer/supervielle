import React from 'react'
import { styled } from 'styled-components';
import second from '../assets/static/second.png';

export const MiniBanners = () => {
  return (
    <BannerContainer>
        <img src={second} alt="" />
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
`;