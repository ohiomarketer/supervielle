import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../main';
import { styled } from 'styled-components';
import eye from '../assets/static/eye.png'

export const Header = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('active', window.scrollY > 0);
      
      });
    }, [])

    const getUsers = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "users"));
          let data = [];
          querySnapshot.forEach((doc) => {
            data = [...data, { id: doc.id, ...doc.data() }];
          });
          setUser(data[0]);
        } catch (error) {
          console.error("Error fetching user: ", error);
        }
      };

useEffect(() => {
    getUsers();
}, []);

  return (
    <>
    <Navigation className='header'>
        <div className='left'>
            <Logo />
            <p className='name'>
            Hola, {
                user.name
            }
            </p>
        </div>
        <div className='right'>
            <img src={eye} alt="" className="eye" />
        </div>
    </Navigation>
    <Separation />
    </>
  )
}

const Navigation = styled.header`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    position: fixed;
    padding: 0px 15px;
    justify-content: space-between;
    height: 5rem;
    transition: all 0.2s ease;

    &.active {
        background-color: #fff;
        box-shadow: 0px 5px 10px 0px #0000001a;
    }

    .left {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #38373f;

        p {
            margin-left: 10px;
            font-size: 16px;
        }

        .name {
            font-size: 16px;
            font-weight: 400;
        }
    }

    .eye {
        height: 22px;
        width: 22px;
        margin-right: 10px;
        margin-top: 5px;
    }
`;

const Separation = styled.div`
  width: 100%;
  height: 5rem;
`