import { Component } from "react";
import { Link } from "react-router-dom";
import "../components/css/home.css";

class Menubar extends Component {
  render() {
    const Logout = () => {
      localStorage.clear();
      window.location.replace("/login");
    };
    var menu;

    if (localStorage.getItem("ticket")) {
      menu = (
        <>
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/aboutus">
              Aboutus
            </Link>
          </li>

          <Link className="nav-link active" aria-current="page" to="/review">
              Review
            </Link>

          <li className="nav-item">
            <Link className="nav-link" to="/Dashboard">
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/AddProduct">
              AddProduct
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AddCategory">
              AddCategory
            </Link>
          </li>
       

          <li className="nav-item">
            <Link className="nav-link" to="/updatecategory/:cid">
              Update Category
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Updateprofile">
              Updateprofile
            </Link>
          </li>

          <li className="nav-item">
            <button
              className="nav-link btn"
              onClick={() => {
                Logout();
              }}
            >
              LogOut
            </button>
          </li> */}

          <Link to="/Home">Home</Link>
          
          <Link to="/aboutus">
              Aboutus
            </Link>
            {/* <Link to="/review">
              Review
            </Link> */}
            <Link  to="/Dashboard">
              Dashboard
            </Link>
            <Link  to="/AddProduct">
              AddProduct
            </Link>
            <Link to="/AddCategory">
              AddCategory
            </Link>
            {/* <Link to="/updatecategory/:cid">
              Update Category
            </Link>
            <Link to="/Updateprofile">
              Updateprofile
            </Link>
            <Link  to="/Updateprofile">
              Updateprofile
            </Link> */}

            

          
        </>
      );
    } else {
      menu = (
        <>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/Login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/aboutus">
              Aboutus
            </Link>
          </li> */}

          <Link to="/Home">Home</Link>
          <a href="#about">about</a>
          <a href="#products">products</a>
          <a href="#contact">contact</a>
        </>
      );
    }

    return (
      //   <div>
      //     <nav className="navbar navbar-expand-lg bg-light">
      //     {/* <div class="icons">
      //     <a href="#" class="fas fa-heart"></a>
      //     <a href="#" class="fas fa-shopping-cart"></a>
      //     <a href="#" class="fas fa-user"></a>
      // </div> */}
      //       <div className="container-fluid">
      //         <a className="navbar-brand" href="#">
      //           Navbar
      //         </a>
      //         <button
      //           className="navbar-toggler"
      //           type="button"
      //           data-bs-toggle="collapse"
      //           data-bs-target="#navbarNav"
      //           aria-controls="navbarNav"
      //           aria-expanded="false"
      //           aria-label="Toggle navigation"
      //         >
      //           <span className="navbar-toggler-icon"></span>
      //         </button>
      //         <div className="collapse navbar-collapse" id="navbarNav">
      //           <ul className="navbar-nav">{menu}</ul>
      //         </div>
      //       </div>
      //     </nav>
      //   </div>

      <header>
        <input type="checkbox" name="" id="toggler" />
        <label for="toggler" class="fas fa-bars"></label>

        <a href="#" class="logo">
          flower<span>.</span>
        </a>

        <nav class="navbar">
          {/* <a href="#home">home</a> */}
          {menu}
        </nav>

        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-shopping-cart"></a>
          <a href="#" class="fas fa-user"></a>
        </div>
      </header>
    );
  }
}
export default Menubar;
