import { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom"
import { Container } from 'react-bootstrap'
import {Home} from './pages/Home'
import { About } from './pages/About'
import {Navbar} from './components/Navbar'
import { Settings } from './pages/Settings'
import { OrderForm } from './pages/OrderForm'
import  url  from './api/orders';
function App() {
  const [count, setCount] = useState(0);

  interface Orders{
    orderId:string;
    orderType:string;
    customerName:string;
    createdDate:string,nullable:true;
    createdByUserName:string;
  }


  
  const [orders,setOrders]=useState([]);
  const controller=new AbortController();


    useEffect(()=>{
      
   
           async function getOrders(){
            const resp=await url.get("/api/Orders");
            // const data=await resp.json();
            console.log('Data',resp);
            // setOrders(data);
        }
       
        getOrders();
        
    },[]);
    
  return (
    <>
    <Navbar/>
    {/* <Searchbar/> */}
      <Container className="mb-4">
        <Routes>
          <Route path='/' element={<Home orders={orders}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/orderform' element={<OrderForm/>}/>
        </Routes>
      </Container>
    </>
  
 
    
  )
}

export default App
