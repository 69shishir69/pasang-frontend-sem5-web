import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updateproduct = (e) => {
  const { pid } = useParams();
  const [Productname, setProductname] = useState("");
  const [Productdescription, setProductdescription] = useState("");
  const [Productprice, setProductprice] = useState("");
  const [Productquantity, setProductquantity] = useState("");
  const [Productcategory, setProductcategory] = useState("");
  const [pimage, setProductimage] = useState("");
  const [Producttype, setProducttype] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/product/single/" + pid, config)
      .then((response) => {
        console.log(response.data.data.Product_name);
        setProductname(response.data.data.Product_name);
        setProductdescription(response.data.data.Product_description);
        setProductquantity(response.data.data.Product_quantity);
        setProductprice(response.data.data.Product_price);
        setProductcategory(response.data.data.Product_category);
        setProducttype(response.data.data.Product_type);
        setProductimage(response.data.data.pimage)
      });
  },[]);

  const UpdateproductForm = (e) => {
    e.preventDefault();
    // const data = {
    //   Product_name: Productname,
    //   Product_price: Productprice,
    //   Product_description: Productdescription,
    //   Product_quantity: Productquantity,
    //   Product_category: Productcategory,
    //   Product_type: Producttype,
    //   Product_id: ProductId,
    // };

    const data = new FormData();
        data.append('Product_name', Productname);
        data.append('Product_price', Productprice);
        data.append('Product_description', Productdescription);
        data.append('Product_quantity', Productquantity);
        data.append('Product_category', Productcategory);
        data.append('Product_type', Producttype);
        data.append('pimage', pimage);

        

    axios
      .put("http://localhost:90/product/update/" + pid, data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });

    // const data = new FormData();
    // data.append('Product_name',Productname);
    // data.append('Product_description', Productdescription);
    // data.append('Product_price', Productprice);
    // data.append('Product_quantity', Productquantity);
    // data.append('Product_category', Productcategory);
    // data.append('pimage', Productimage);
    // data.append('Product_type', Producttype);

    // axios
    //   .put("http://localhost:90/product/update", data, config)
    //   .then((response) => {
    //     if (response) {
    //       //setmessage ("Product updated successfulyy")
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
              <h1>Update product</h1>

              <form>
                <div className="form-group">
                  <label>Product name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Productname}
                    onChange={(e) => {
                      setProductname(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Product Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Productdescription}
                    onChange={(e) => {
                      setProductdescription(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Productprice}
                    onChange={(e) => {
                      setProductprice(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Product Quantity</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Productquantity}
                    onChange={(e) => {
                      setProductquantity(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Product Category</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Productcategory}
                    onChange={(e) => {
                      setProductcategory(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Product Image</label>
                  <input
                    type="file"
                    className="form-control"
                  
                    onChange={(e) => {
                      setProductimage(e.target.files[0]);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Product Type</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Producttype}
                    onChange={(e) => {
                      setProducttype(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    className="btn"
                    onClick={UpdateproductForm}
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

export default Updateproduct;
