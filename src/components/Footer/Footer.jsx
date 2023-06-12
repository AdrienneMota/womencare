import burterfly from '../assets/img/buterflyicon.png';
import { ContainerFooter } from './Styles';
import { Logo } from './Styles';

export default function Footer() {
    return (
      <ContainerFooter>
          <Logo>
              <img src={burterfly} alt='borboleta'/>
              <span>womancare</span>
          </Logo> 
          <p>Developed with ReactJS</p>
          <p>© 2023 WOMANCARE</p>               
      </ContainerFooter>
    );
  }