import React from "react";
import { Link } from "react-router-dom";
import error from './Home/images/error.jpg';
import styled from 'styled-components';

export default function Error() {
    const ErrorPage = styled.div`
       height: 100vh;
       background: #fff;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;

       @media (min-width: 992px) {
        flex-direction: row;
       }

       img {
            flex: 1;
            height: 100vh;
            width: 100%;
        }

        div {
            flex: 0.5;
            order: -1;
            display: flex;
            align-items: center;
            justify-content: center;

           a {
               background: #844FFE;

               &:hover{
                   background: #DD4FFB;
               }
           }
       }
        `;

    return (
        <ErrorPage>
            <img src={error} alt="error" />
            <div>
                <Link to="/" className="main-btn">
                    back home
                </Link>
            </div>
        </ErrorPage>
    );
}