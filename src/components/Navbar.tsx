import {Container, Button, Nav, Navbar as Navbarbs} from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import { FaCog,FaUserCircle } from 'react-icons/fa';

export function Navbar(){
    return (
    <Navbarbs sticky="top" className="shadow-sm p-1 mb-3 bg-body-tertiary">
        <Container>
            <Nav className="me-auto">
            <Navbarbs.Brand href="/">
            <img
              src="./utilities/images/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbarbs.Brand>
                <Nav.Item>
                    <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
                </Nav.Item>
            </Nav>
          
                    
            <Button style={{width:"3rem",height:"3rem"}} 
            variant="outline-none">
                <NavLink to={"/settings"} as={NavLink}>
              <FaCog style={{color:"black"}}/>
              </NavLink>
            </Button>
        
            <Button style={{width:"3rem",height:"3rem"}} variant="outline-none" className="ml-1">
            <NavLink to={"/about"} as={NavLink}>
                <FaUserCircle style={{color:"black"}}/>
                </NavLink>
            </Button>
        </Container>
    </Navbarbs>
    );
}