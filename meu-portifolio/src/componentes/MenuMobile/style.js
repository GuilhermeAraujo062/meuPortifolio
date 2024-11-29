import styled, { css } from "styled-components";

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    background: rgb(0,11,22);
    background: linear-gradient(29deg, rgba(0, 8, 15, 0.901) 0%, rgba(0, 102, 204, 0.895) 95%);

    opacity: 0;
    pointer-events: none;
    

> svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
}

> nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: white;
}

${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;  
`}

`;