import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../main';
import { styled } from 'styled-components';
import eye from '../assets/static/eye.png'

export const Header = () => {

    const [user, setUser] = useState([]);

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
  )
}

const Navigation = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 15px;
    justify-content: space-between;
    height: 5rem;

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