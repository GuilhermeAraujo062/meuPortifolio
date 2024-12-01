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

    transition: .5s;
    transform: translateY(50px);
    
> svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
}

> nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: white;
    transform: scale(0.7);
    transition: .7s;
}

${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
        transform: rotate(0deg);
    }

    > nav {
        transform: scale(1);
    }
`}

`;