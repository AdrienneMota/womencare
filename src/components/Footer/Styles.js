import styled from 'styled-components';

export const ContainerFooter = styled.div`
  background-color: #543f7b; 
  width: 100vw;
  height: 7rem;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0px 0px 4px black;
  bottom: 0;
  position: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
  p{
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    span{
        font-size: 32px;
        font-family: 'Alkatra', cursive;;
        font-weight: bold;
    }
    img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`