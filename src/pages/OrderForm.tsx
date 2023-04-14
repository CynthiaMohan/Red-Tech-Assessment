import { Col, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function OrderForm() {
  return (
    <>
   <h1>Create a New Order</h1>
    <Form>
      <Form.Group className="mb-3" controlId="orderCreatedBy      ">
        <Form.Label>Created By</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Customer Name" />
      </Form.Group>
      <Row> 
        <Col><Form.Check type='radio' id='standard' label='Standard'/></Col>
        <Col><Form.Check type='radio' id='returnOrder' label='Return Order'/></Col>
        <Col><Form.Check type='radio' id='saleOrder' label='Sale Order'/></Col> <Col><Form.Check type='radio' id='purchaseOrder' label='Purchase Order'/></Col>
    </Row>
     
      
      <Button variant="primary" type="submit"  className='mt-2'>
        Submit
      </Button>
    </Form>
    </>
  );
}

