import React from "react";
// import RegisterCustomer from "./Register";
// import LoginCustomer from "./Login";
import {Routes,Route} from 'react-router-dom'; 
import Addproduct from "./Addproduct";
import Dashboard from "./Dashboard";
import Updateproduct from "./updateproduct";
import Updateprofile from "./updateprofile";
import Singleproduct from "./singleproduct";
import PrivateRoute from "./ProtectedRoute";
import Updatecategory from "./updatecategory";
import Addcategory from "./Addcategory";
import Singlecategory from "./Singlecategory";
import Login from "./login";
import Register from "./Register";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Home from "./home";
import Review from "./review";
import SelectDateAndTime from "./book_appointment/SelectDateAndTime";
import BookAppointment from "./book_appointment/BookAppointment";







const Mid = ()=>{
    return(
        <> 
        <Routes>
            
            {/* <Route path = "/register" element={<RegisterCustomer/>}/> */}
            {/* <Route path = "/login" element={<LoginCustomer/>}/> */}
            <Route path = "/addproduct" element={<PrivateRoute><Addproduct/></PrivateRoute>}/>
            <Route path = "/dashboard" element={<Dashboard/>}/>
            <Route path = "/updateprofile" element={<Updateprofile/>}/>
            <Route path = "/updateproduct/:pid" element={<Updateproduct/>}/>
            <Route path = "/product/single/:pid" element={<Singleproduct/>}/>
            <Route path = "/PrivateRoute/" element={<PrivateRoute/>}/>
            {/* <Route path = "/updatecategory/:ProductId" element={<Updatecategory/>}/> */}
            <Route path = "/addcategory" element={<PrivateRoute><Addcategory/></PrivateRoute>}/>
            <Route path = "/updatecategory/:cid" element={<Updatecategory/>}/>
            <Route path = "/category/single/:cid" element={<Singlecategory/>}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/register" element={<Register/>}/>
            <Route path = "/aboutus" element={<Aboutus/>}/>
            <Route path = "/home" element={<Home/>}/>
            <Route path = "/review" element={<Review/>}/>
            

            {/* path for appointment booking */}
            <Route path='/selectDateAndTime' element={<PrivateRoute><SelectDateAndTime/></PrivateRoute>} />
            <Route path='/bookAppointment/:date_value/:time_value/:dt_id' element={<PrivateRoute><BookAppointment/></PrivateRoute>} />
            
           
            
            

        </Routes>
        
        </>
    )
}

export default Mid;