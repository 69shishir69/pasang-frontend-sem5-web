import { useState } from "react";
import axios from "axios";

const Updateprofile =()=>{
    const [Productimage, setProductimage] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
  

    const UpdateprofileForm =(e)=>{
        e.preventDefault();




    const data = new FormData();
    data.append('Firstname',Firstname);
    data.append('Lastname', Lastname);
    data.append('Email', Email);
    data.append('pimage', Productimage);


    


    const config = {
        headers:{
            Authorization : "Bearer " + localStorage.getItem('ticket'),
        }
    }
    axios.put("http://localhost:90/profile/update",data, config)
    .then((response)=>{
        if(response){
            //setmessage ("Profile updated successfulyy")
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


    <h1>Update profile</h1> 
    

    <form>
        <div className="form-group">
            <label>Firstname</label>
            <input type="text" className="form-control" onChange={(e)=>{setFirstname(e.target.value)}}/>

        </div>
        <div className="form-group">
            <label>Lastname</label>
            <input type="text" className="form-control" onChange={(e)=>{setLastname(e.target.value)}}/>

        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>

        </div>


        {/* <div className="form-group">
            <label>Product Image</label>
            <input type="file" className="form-control" value={Productimage} onChange={(e) => {setProductimage(e.target.files[0]); }} */}

        
<div className="form-group">
                  <label>Product Image</label>
                  <input
                    type="file"
                    className="form-control"
                    value={Productimage}
                    onChange={(e) => {
                      setProductimage(e.target.files[0]);
                    }}
                  />
                </div>





            


         

            <div className="form-group">
                <input type = "submit" className="btn" onClick={UpdateprofileForm}/>
            </div> 

          
    </form>
    </div>
    </div>
    </div>
    </div>
   
    
    </>
)
}  

export default Updateprofile;

