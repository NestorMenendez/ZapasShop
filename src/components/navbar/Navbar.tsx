import { Link } from "react-router-dom"

import "./navbar.styles.css"

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light align-items-center">
      <div className="container-fluid px-5">
        <div className="">
          <Link to={"/"} className="navbar-brand" ><h1 className="logo pt-4">ZapasShop</h1></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/Login"} className="nav-link" aria-current="page" >Login</Link>
            <Link to={"/"} className="nav-link" aria-current="page" >Home</Link>
            <Link to={"/Cart"} className="nav-link" >Cart</Link>
            <Link to={"/Private/Profile"} className="nav-link">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};