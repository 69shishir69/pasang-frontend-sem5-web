import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard=()=>{
    const [details, setDetails] = useState([]);
    const config ={
        headers: {
            Authorization : "Bearer " + localStorage.getItem('ticket')
        }
    }
    const deletePro=(pro_id)=>{
        axios.delete("http://localhost:90/product/delete/"+pro_id, config)
        .then(result=>{
            console.log(result);
            if(result.data.success){
                window.location.reload()

            }
        })
        
            
    }

    


    useEffect(()=>{
        axios.get("http://localhost:90/product/display",)
        .then(response=>{
            setDetails(response.data.data)
            // console.log(response)
        })
        .catch(e=>{
            console.log(e);
        })
    },[])
    return(
      
        <div className="container">
            <div className="row">
                {details.map((items)=>{
                    return (< div className="col-md-4">
                    <h2> My Dashboard</h2>
                    {console.log(items)}
                    <img className="img-thumbnail" src ={"http://localhost:90/"+items.Product_image}/>
                    <p> Product_category : {items.Product_category}</p>
                    <p> Product_image: {items.Product_image}</p>
                    <p> Product_price: {items.Product_price}</p>
                    <p> Product_quantity: {items.Product_quantity}</p>
                    <p> Product_description: {items.Product_description}</p>
                    <p> Product_name: {items.Product_name}</p>
                    
                    <div>
                        <Link className="btn btn-outline-danger" to = {"/updateproduct/"+items._id}> Update </Link>
                        <Link className="btn btn-outline-danger" to = {"/readmore /"+items._id}> Read More.. </Link>
                       
                        <button className="btn btn-outline-danger" onClick ={()=>{deletePro(items._id)}}>Delete</button>
                    </div>
                    </div>
                    )
                })}
            </div>


        </div>
    )
}



export default Dashboard;