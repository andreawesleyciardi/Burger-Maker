import React from 'react';
import styled from 'styled-components';



const StyledLoader = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.5);
`;

const Loader = () => {
    return <StyledLoader><p>Loading...</p></StyledLoader>;
};

export default Loader;