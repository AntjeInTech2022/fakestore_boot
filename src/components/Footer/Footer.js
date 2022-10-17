import {Container, Nav, Navbar, Button, Badge} from 'react-bootstrap';
import {BsCartPlus,BsGithub, BsBookmark, BsChat} from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import "../../App.css";


function Footer() {

  const navigate = useNavigate()

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className='ContainerFooter'>
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="https://github.com/AntjeInTech2022/fakestore_boot" target="_blank"><BsGithub/></Nav.Link>
            <Nav.Link href="https://fakestoreapi.com/docs" target="_blank">API</Nav.Link>
            <Nav.Link href="/chat">About</Nav.Link> */}
            
             <Button variant="dark">
                <BsGithub className='IconFooter'/> 
                </Button>

            <Button variant="dark">
                <BsCartPlus className='IconFooter'/> 
                {/* <Badge bg="secondary">0</Badge>
                <span className="visually-hidden">items in cart</span> */}
            </Button>

                <Button onClick={()=>navigate("/chat")} variant="dark">
                 <BsChat className='IconFooter'/> 
                </Button>

                
                <Button variant="dark">
                <BsBookmark className='IconFooter'/> 
                </Button>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Footer;

