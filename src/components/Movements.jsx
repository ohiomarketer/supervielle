import React, { useState } from 'react'
import movementsimage from '../assets/static/movimientos.png'
import loader from '../assets/static/movimientos2.png'
import { styled } from 'styled-components';

export const Movements = () => {
    const [loading, setLoading] = useState(false);

    const loadAndBack = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

if (loading) {
    return (
        <MovementsContainer onClick={() => loadAndBack()}>
            <img src={loader} alt="" />
        </MovementsContainer>
        )
    }
  return (
    <MovementsContainer onClick={() => loadAndBack()}>
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
