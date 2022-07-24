import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updatecategory = (e) => {
  const { cid } = useParams();
  const [Category_name, setCategoryname] = useState("");


  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/category/single/" + cid, config)
      .then((response) => {
        console.log(response.data.data.Category_name);
        setCategoryname(response.data.data.Category_name);
        
      });
  },[]);

  const UpdatecategoryForm = (e) => {
    e.preventDefault();
    const data = {
      Category_name: Category_name,
      
    };


    axios
      .put("http://localhost:90/category/update/" + cid, data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });


    // axios
    //   .put("http://localhost:90/category/update", data, config)
    //   .then((response) => {
    //     if (response) {
    //       //setmessage ("CAtegory updated successfulyy")
    //     }
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Update category</h1>

              <form>
                <div className="form-group">
                  <label>Category name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Category_name}
                    onChange={(e) => {
                      setCategoryname(e.target.value);
                    }}
                  />
                </div>
                

                <div className="form-group">
                  <input
                    type="submit"
                    className="btn"
                    onClick={UpdatecategoryForm}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updatecategory;
