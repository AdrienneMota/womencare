import { useEffect, useState } from "react"
import Request from "../../components/Request"
import api from "../../services/server"
import banner from '../../assets/img/banner.png'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Container, Banner, RequestsContainer } from "./Styles" 

export default function Home(){
    const [requests, setRequests] = useState([])
  
    async function getAllRequests() {
      try {
        const response = await api.get('/requests')
        setRequests(response.data)  
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getAllRequests()
      }, [])
  
    return(
      <>
        <Header/>
        <Container>
          <Banner src={banner}/>
          <RequestsContainer>
            {
              requests?.map( (r) => (
                <Request key={`requests-container-${r.id}`} total={r.total} donatory={r.donatory.user_name} giver={r.giver_id} idRequest={r.id}/>
              ))
            }        
          </RequestsContainer>
        </Container>
        <Footer/>
      </>   
      )
  }