import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import arrow from '../assets/static/arrow.png'
import { db } from '../main';
import { collection, getDocs } from 'firebase/firestore';

export const Amount = () => {

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
    <AmountContainer>
        <div className="left">
            <p className="account">
            {user.account} 
            </p>
            <p className="balance"
            >
            <span>$</span>{user.balance}
            </p>
        </div>
        <div className="right">
            <img src={arrow} alt="" />
        </div>
    </AmountContainer>
  )
}

const AmountContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 30px;

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        .account {
            font-size: 15px;
            margin-right: 5px;
            font-weight: 500;
            letter-spacing: 1px;
            color: #38373f
        }

        .balance {
            color: #38373f;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 1px;

            span {
                margin-right: 3px;
            }
        }
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 17px;
            height: 23px;
        }
    }
`