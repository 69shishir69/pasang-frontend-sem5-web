import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BookAppointment = () => {
  const { date_value } = useParams();
  const { time_value } = useParams();
  const { dt_id } = useParams();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };

//   const [userDetails, setDetails] = useState([]);
// 
//   useEffect(() => {
//     axios
//       .get("http://localhost:90/patient/dashboard", config)
//       .then((response) => {
//         setDetails(response.data);
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);

  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("Error");

  const bookAppointment = (e) => {
    e.preventDefault();
    // This is used inly when data excluding file is inserted
    const data = {
      date: date_value,
      time : time_value,
      fullname: fullname,
      mobile: mobile,
      email: email,
    };
    console.log(data);

    axios
      .post("http://localhost:90/customer/bookAppointment", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.msg != "Invalid Token") {
            if(response.data.msg == "Already Appointment"){
                setMsg("Already Appointment")
            } else{
                setMsg("Added Successfully")
                const data2 = {
                    date : date_value,
                    time : time_value
                }
                axios.put("http://localhost:90/staff/appointment/time/delete", data2)
                .then((res)=>{
                    console.log(res);

                    if(res.data.msg == "time deleted"){
                        setMsg("added success and delete success")
                    } else{
                        setMsg("added success but delete not success")
                    }
                })
                .catch((e)=>{
                    console.log(e)
                })
            }

        }
      })
      .catch((e) => {
        console.log(e)
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {msg}
            <h1>Book Appoitment</h1>
            <form>
              {/* Form field for Date field */}

              <div className="form-group">
                <label>Date</label>
                <input
                  type={"text"}
                  value={date_value}
                  className="form-control"
                  readOnly
                />
              </div>

                {/* Form field for Time field */}

              <div className="form-group">
                <label>Time</label>
                <input
                  type={"text"}
                  value={time_value}
                  className="form-control"
                  readOnly
                />
              </div>
              {/* Form field for FullName field */}

              <div className="form-group">
                <label>FullName</label>
                <input
                type={"text"}
                className="form-control"
                onChange={(e) => {
                    setFullname(e.target.value);
                }}
                />
              </div>
              {/* Form field for Mobile field */}

              <div className="form-group">
                <label>Mobile</label>
                    <input
                    type={"text"}
                    className="form-control"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
              </div>
              {/* Form field for EMail field */}

              <div className="form-group">
                <label>Email</label>
                    <input
                    type={"text"}
                    className="form-control"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
              </div>
              {/* Button for booking field */}

              <div className="form-group">
                <input
                  type={"submit"}
                  className="btn btn-outline-danger"
                  onClick={bookAppointment}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
