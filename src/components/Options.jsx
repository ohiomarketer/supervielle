import React, { useState } from 'react';
import optionsimage from '../assets/static/image.png';
import { styled } from 'styled-components';

export const Options = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleToggleToast = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <OptionsContainer onClick={handleOpen}>
                <img src={optionsimage} alt="" />
            </OptionsContainer>
            {open && (
                <ToastContainer>
                    <Toast>
                        <SlideClose />
                        <p className="title">En este momento no podemos ofrecerte este servicio</p>
                        <p className="description">Todavía no cuentas con una cuenta Supervielle. No es posible continuar con esta operación.</p>
                        <button onClick={handleClose}>Cerrar</button>
                    </Toast>
                </ToastContainer>
            )}
        </>
    );
};

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

const ToastContainer = styled.div`
    background: #8686862d;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: ${({ open }) => (!open ? '100%' : '0')};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 9999;
    transition: all 0.3s ease;
`;

const Toast = styled.div`
    background: #f9f8fe;
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 15px 15px 0px 0px;
    transform: translateY(${({ open }) => (!open ? '0%' : '100%')});
    transition: all 0.3s ease;

    .title {
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: #38373f;
    }

    .description {
        text-align: center;
        font-size: 14px;
        color: #38373f;
    }

    button { 
        color: #38373f;
        border: none;
        padding: 15px;
        border-radius: 5px;
        background: #e5e4e9;
        font-size: 14px;
        width: 95%;
        cursor: pointer;
    }
`;

const SlideClose = styled.div`
    width: 40%;
    height: 4px;
    border-radius: 3px;
    background: #e5e4e9;
`;
