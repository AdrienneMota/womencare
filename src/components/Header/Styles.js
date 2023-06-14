import styled from 'styled-components';

export const NavBar = styled.div`
    width: 100vw;
    height: 3.5rem;
    box-shadow: 0px 0px 4px black;
    position: fixed;
    top: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #ffffff;
`
export const Container = styled.div`
    width: 95%;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items:  center;
    justify-content: space-between;
    @media (max-width: 410px) {
      width: 100%;
    }
  
`
export const Logo = styled.div`
    height: 2rem;
    width: 200px;
    display: flex;
    cursor: pointer;
    h1{
      font-size: 32px;
      font-family: 'Alkatra', cursive;;
      font-weight: bold;
      color: #543f7b;
    }
    img{
      width: 40px;
      height: 32px;
    }
    @media (max-width: 410px) {
      img{
        width: 20px;
        height: 12px;
      }
      h1{
      font-size: 32px;
      font-family: 'Alkatra', cursive;;
      font-weight: bold;
      color: #543f7b;
    }
    }
  `
export const Links = styled.div`
    width: 50%;
    display: flex;
    align-items:  center;
    justify-content: space-around;
    .linkstyle{
      width: 10rem;
      padding: 5px;
      background-color: #ffffff;
      color: #6e427b;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;  
      font-size: 15px;
      font-weight: 400;
      border-radius: 5px;
      text-align: center;
    }
`