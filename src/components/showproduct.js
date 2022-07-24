import axios from "axios";
import { useEffect, useState } from "react";

const Showproduct = ()=>{
    const [details, setDetails] = useState([]);
    const config = {
        headers : {
            Authorization : "Bearer "+ localStorage.getItem('ticket')
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

    }

    useEffect(()=>{
        axios.get("http://localhost:90/product/display", config )
        .then(result=>{
            console.log(result)
            setDetails(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])


    return(
        <div className="container">
            <div className="row">

            
        {details.map(singleData=>{
            return(
                <div className="col-md-4">
                    <p><img src="http://localhost:90/" /></p>
                    <h3>{singleData.product_name}</h3>
                    <p>Price  : {singleData.product_price}</p>
                    <p>SKU : {singleData.product_sku}</p>
                    <p>Quantity : fdasf </p>
                    <p>Description : fdsa fd</p>
                    <p> <Link to ={"/updateproduct/"+ singleData._id}> Update</Link></p>
                    <Link to= {"/product/single/"+singleData._id}> Read more..</Link>
                    <button onClick ={()=>{deletePro(singleData._id)}}>Delete</button>
                </div>
            )

})}
                

                


              


             


            </div>
        </div>
    )


export default Showproduct;