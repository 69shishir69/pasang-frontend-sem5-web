import { useState } from "react";
import axios from "axios";


const Addcategory =()=>{
    const [Categoryname, setCategoryname] = useState('');
  

    // const [Productimage, setProductimage] = useState('');
    
    const AddcategoryForm =(e)=>{
        e.preventDefault();
        

        const data = new FormData();
        data.append('Category_name',Categoryname);
        
        // data.append('pimage', Productimage);
        

        


        const config = {
            headers:{
                Authorization : "Bearer " + localStorage.getItem('ticket'),
            }
        }
        axios.post("http://localhost:90/category/insert",data, config)
        .then((response)=>{
            if(response){
                //setmessage ("Category added successfulyy")
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


        <h1>Add Category</h1> 
        

        <form>
            <div className="form-group">
                <label>Category name</label>
                <input type="text" className="form-control" onChange={(e)=>{setCategoryname(e.target.value)}}/>

            </div>
           
                
                 

                


             

                <div className="form-group">
                    <input type = "submit" className="btn" onClick={AddcategoryForm}/>
                </div> 

              
        </form>
        </div>
        </div>
        </div>
        </div>
       
        
        </>
    )
}  

export default Addcategory;