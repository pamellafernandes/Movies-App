import styled from "styled-components";

export const Container = styled.div `
    padding: 4rem 0;
   
    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        max-width: 300px;
        width: 50%;
        border-radius: 1.3rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    a {
        text-decoration: none;
        background: indigo;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    a:hover {
       filter: brightness(115%);
    }

    span {
        line-height: 135%;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .release-date {
        opacity: 0.5;
    }

    @media screen and (max-width: 600px) {
        h1 {
            text-align: center;
        }

       .movie {
            flex-direction: column;
       }

       .details {
        margin-left: 0;
        max-width: 80%;
       }

       a {
        margin: 0 auto;
       }

       span {
        text-align: justify;
       }
    }
`;