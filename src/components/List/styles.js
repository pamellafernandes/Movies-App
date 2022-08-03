import styled from "styled-components";

export const Search = styled.input`
    margin: 0 auto;
    padding: 1rem;
    margin-bottom: 3rem;
    width: 50%;
    font-size: 1.2rem;
    outline: none;
    border-radius: .5rem;
    border: 0.2rem solid indigo;

    @media screen and (max-width: 600px) {
        width: 70%;
    }
`;

export const MovieList = styled.ul `
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    a{
        transition: all 0.4s;
    }
    a:hover {
        transform: scale(1.1);
       
    }

    @media screen and (max-width: 600px){
        row-gap: 1rem;
    }
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
    }
    a{
        transition: all 0.4s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;