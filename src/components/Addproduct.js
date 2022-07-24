import { useState } from "react";
import axios from "axios";


const Addproduct =()=>{
    const [Productname, setProductname] = useState('');
    const [Productdescription, setProductdescription] = useState('');
    const [Productprice, setProductprice] = useState('');
    const [Productquantity,setProductquantity]= useState('');
    const [Productcategory,setProductcategory]= useState('');
    const [Productimage, setProductimage] = useState('');
    const [Producttype, setProducttype] = useState('');
    
    const AddproductForm =(e)=>{
        e.preventDefault();
        // const data = {
        //     Product_name : Productname,
        //     Product_description : Productdescription,
        //     Product_price: Productprice,
        //     Product_quantity: Productquantity,
        //     Product_category:  Productcategory,
        //     Product_image: Productimage,
        //     Product_type: Producttype,
        // }

        const data = new FormData();
        data.append('Product_name',Productname);
        data.append('Product_description', Productdescription);
        data.append('Product_price', Productprice);
        data.append('Product_quantity', Productquantity);
        data.append('Product_category', Productcategory);
        data.append('pimage', Productimage);
        data.append('Product_type', Producttype);
        

        


        const config = {
            headers:{
                Authorization : "Bearer " + localStorage.getItem('ticket'),
            }
        }
        axios.post("http://localhost:90/product/insert",data, config)
        .then((response)=>{
            if(response){
                //setmessage ("Product added successfulyy")
            }
            console.log(response.data);
        })
        .catch((e)=>{
            console.log(e)
        })
    }
      

    
    return(
        <>
        <div className="d-flex align-items-center flex-column" >
        <div className="container">
        <div className="row">
            <div className="col-md-12">


        <h1>Add product</h1> 
        

        <form>
            <div className="form-group">
                <label>Product name</label>
                <input type="text" className="form-control" onChange={(e)=>{setProductname(e.target.value)}}/>

            </div>
            <div className="form-group">
                <label>Product Description</label>
                <input type="text" className="form-control" onChange={(e)=>{setProductdescription(e.target.value)}}/>

            </div>
            <div className="form-group">
                <label>Product Price</label>
                <input type="text" className="form-control" onChange={(e)=>{setProductprice(e.target.value)}}/>

            </div>

            <div className="form-group">
                <label>Product Quantity</label>
                <input type = "text" className="form-control" onChange={(e)=>{Productquantity(e.target.value)}} />


            </div>
            <div className="form-group">
                <label>Product Category</label>
                <input type = "text" className="form-control" onChange={(e)=>{setProductcategory(e.target.value)}} />
                </div>
                
                
                 <div className="form-group">
                <label>Product Image</label>
                <input type = "file" className="form-control" onChange={(e)=>{setProductimage(e.target.files[0])}} />
                </div> 

                <div className="form-group">
                <label>Product Type</label>
                <input type = "text" className="form-control" onChange={(e)=>{setProducttype(e.target.value)}} />
                </div>
                

                


             

                <div className="form-group">
                    <input type = "submit" className="btn" onClick={AddproductForm}/>
                </div> 

              
        </form>
        </div>
        </div>
        </div>
        </div>
       
        
        </>
    )
}  

export default Addproduct;