import React from 'react'
import movementsimage from '../assets/static/movimientos.png'
import { styled } from 'styled-components';

export const Movements = () => {
  return (
    <MovementsContainer>
        <img src={movementsimage} alt="" />
    </MovementsContainer>
  )
}

const MovementsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
`
