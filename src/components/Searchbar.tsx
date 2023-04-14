import { useState } from "react";
import { Container,Form, Button, Row,Col, Dropdown } from "react-bootstrap"
import {FaSearch,FaPlus,FaTrash} from 'react-icons/fa'
import { Link } from "react-router-dom"

export function Searchbar(){
    const [value,setValue]=useState('');
   const logOption=(e: any)=>{
        console.log('logOption',e.target.textContent);
        setValue(e.target.textContent);
   }
    return (
        <Container>
            <Row>
                <Col md="auto">
               <input type="text" placeholder="Customer Search" className="p-0.75 me-0" /></Col>
               <Col> <Button variant="primary" size="sm" className="mt-0"><FaSearch/></Button></Col>
              
              
            <Col>
            <Link to={"/orderform"} >
            <Button variant="primary" size="sm" className="ms-0" >
            <FaPlus/> CREATE ORDER
            </Button>
            </Link>
            </Col>
                
              <Col><Button variant="primary" size="sm" className="ms-1 "><FaTrash/> DELETE SELECTED</Button></Col>
                
                <Col>
                <Dropdown className="m" >
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" >
                      {value?value:'Order Type'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu  onClick={(e)=>{logOption(e)}}>
                        <Dropdown.Item href="#/action-1" value="standard">Standard</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" value='returnOrder'>Return Order</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"value='transferOrder'>Transfer Order</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" value='saleOrder'>Sale Order</Dropdown.Item>
                        <Dropdown.Item href="#/action-5"value='purchaseOrder'>Purchase Order</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
        </Container>
        )
}