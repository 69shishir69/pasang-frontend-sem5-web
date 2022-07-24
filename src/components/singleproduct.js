import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


const Singleproduct=()=>{
    const [details, setDetails] =useState('');
    const {pid} = useParams();
    const config = {
        headers:{
            Authorization : "Bearer " + localStorage.getItem('ticket'),
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/product/single/"+pid, config)
        .then(result=>{
            console.log(result)
            setDetails(result.data.data)
        })
        .catch()
    })
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p><img src ={"http://localhost:90/"+details.Product_image} className="img-fluid"/></p>
                    <h3> {details.Product_name}</h3>
                    <p> price: {details.Product_price} </p>
                    <p> quantity: {details.Product_quantity} </p>
                    <p> type: {details.Product_type} </p>
                    <p> description: {details.Product_description} </p>

                </div>
            </div>
        </div>

    )
        
    
}
export default Singleproduct;