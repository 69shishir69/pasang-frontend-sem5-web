import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const SelectDateAndTime = () => {
  const [SelectDateAndTimeDetails, setDetails] = useState([]);

  // variable for date and time
  const [date_value, setDate] = useState("");
  const [isDate, setIsDate] = useState("");
  const [lstTime, setLstTime] = useState([]);
  const [time_value, setTime] = useState("");
  const [dt_id, setDtId] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:90/staff/appointment/dateAndtime")
      .then((response) => {
        setDetails(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="d-grid gap-2 d-md-block">
            {SelectDateAndTimeDetails.map((dateAndtime) => {
              const list = (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm "
                    onClick={() => {
                      setDate(dateAndtime.date);
                      setIsDate(true);
                      setLstTime(dateAndtime.time);
                      setDtId(dateAndtime._id)
                    }}
                  >
                    {dateAndtime.date}
                  </button>
                </>
              );
              return list;
            })}
          </div>
        </div>
        <div className="row">
          <div class="d-grid gap-2 d-md-block">
            {isDate == true ? (
              lstTime.map((time) => {
                return (
                  <button
                    type="button"
                    className="btn btn-underline-danger btn-sm"
                    onClick={() => {
                      setTime(time);
                    }}
                  >
                    {time}
                  </button>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        <div class="d-grid gap-2 d-md-block">
          <Link
            type="button"
            className="btn btn-danger btn-sm"
            to={"/bookAppointment/"+ date_value + "/" + time_value + "/" + dt_id}
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default SelectDateAndTime;
