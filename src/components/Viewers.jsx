import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px; 
    padding: 30px 0 26px; 
    display: flex; 
    flex-direction: row;
    justify-content: space-evenly; 
    align-items: center; 


    @media (max-width: 768px) {
        flex-direction: column; 
    }
`;

const Wrap = styled.div`
    border-radius: 10px; 
    box-shadow: rgb(0 0 0 / 69% ) 0 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0 16px 10px -10px; 
    width: 100%; 
    cursor: pointer; 
    overflow: hidden; 
    align-items: center; 
    position: relative; 
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94); 
    border: 3px solid rgba(249, 249, 249, 0.1); 
    margin-right: 2vw; 

    img {
        width: 100%; 
        height: 100%;
        inset: 0; 
        display: block;
        object-fit: cover; 
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s; 
        z-index: 1;
        position: relative;  
        top: 0; 
    }

    video {
        width: 100%; 
        height: 100%; 
        position: absolute;
        top: 0; 
        opacity: 0; 
        z-index: 0; 
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80% ) 0 40px 58px -16px, 
            rgb(0 0 0 / 72%) 0 30px 22px -10px; 
        
        transform: scale(1.05); 
        border-color: rgba(249, 249, 249, 0.8); 

        video {
            opacity: 1; 
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 5vw; 
    }
`;

export default Viewers;
