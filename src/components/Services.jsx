import React from 'react'
import servicesimage from '../assets/static/servicios2.png'
import { styled } from 'styled-components';

export const Services = () => {
  return (
    <ServicesContainer>
        <img src={servicesimage} alt="" />
    </ServicesContainer>
  )
}

const ServicesContainer = styled.div`
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
`