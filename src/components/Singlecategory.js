import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


const Singlecategory=()=>{
    const [details, setDetails] =useState('');
    const {cid} = useParams();
    const config = {
        headers:{
            Authorization : "Bearer " + localStorage.getItem('ticket'),
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:90/category/single/"+cid, config)
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
                    {/* <p><img src ={"http://localhost:90/"+details.Category_image} className="img-fluid"/></p> */}
                    <h3> {details.Category_name}</h3>
                    

                </div>
            </div>
        </div>

    )
        
    
}
export default Singlecategory;