import orders from "../api/orders";
import { Searchbar } from "../components/Searchbar";

export function Home(props: { orders: any; results: any[]; }){
    
    console.log('Home',orders);
//    const test_orders={orderId:'1',
//           orderType:'item1',
//           customerName:'cindy',
//           createdDate:'4/13/2023',
//           createdByUserName:'cindy'}

    // const renderOrderList=props.results.map((order)=>{
    //     console.log(order);
        
    // });

    return (
        <div>
            <Searchbar/>
        <h1>Home Page</h1>
        {/* <div>{renderOrderList}</div> */}
        </div>  
    )
}