import { Link, useNavigate } from 'react-router-dom';
import burterfly from '../../assets/img/burterfly.png'
import api from '../../services/api';
import { useAuth } from '../../hook/authContext';
import { NavBar, Container, Logo, Links } from './Styles';

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'))
    const { setUser } = useAuth
    const navigate = useNavigate()
  
    async function signOut() {
      try {
        await api.delete('/signout', { headers: { 'Authorization': `Bearer ${user?.token}`}})
        navigate('/') 
        localStorage.clear()
        setUser({
          id: undefined,
          user_name: undefined,
          token: undefined,
        })
      } catch (error) {
        console.log(error)
      }
    }
  
    if(user?.token){
      return (
        <NavBar>
          <Container>
            <Logo onClick={() => navigate('/')}>
            <img src={burterfly} alt='borboleta'/>
            <h1>womancare</h1>
            </Logo>
              <Links>
                <Link className='linkstyle' to='/'>Home</Link>
                <Link className='linkstyle' to='/about'>Sobre</Link>
                <Link className='linkstyle' onClick={() => signOut()}>Sair</Link>
              </Links>
          </Container>
        </NavBar> 
      )
    }
  
    return (
      <NavBar>
        <Container>
          <Logo onClick={() => navigate('/')}>
          <img src={burterfly} alt='borboleta'/>
          <h1>womancare</h1>
          </Logo>
            <Links>
              <Link className='linkstyle' to='/'>Home</Link>
              <Link className='linkstyle' to='/about'>Sobre</Link>
              <Link className='linkstyle' to='/signin'>Entre ou cadastre-se </Link>
            </Links>
        </Container>
      </NavBar>
    );
  }