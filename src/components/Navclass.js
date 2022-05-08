// import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

// export class Navclass extends Component {
const Navclass = () => {
  // render(){

  // }
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsZ
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  general
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  technology
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {/* <div className="d-flex"> */}
            {/* <div className="bg-primary rounded mx-2" style={{height : '30px' , width : '30px',cursor:'pointer'}}></div> */}
            {/* <div className="bg-success rounded mx-2" onClick={()=>props.toogleeMode('success')} style={{height : '30px' , width : '30px',cursor:'pointer'}}></div> */}
            {/* <div className="bg-danger rounded mx-2" onClick={()=>props.toogleeMode('danger')} style={{height : '30px' , width : '30px',cursor:'pointer'}}></div> */}
            {/* <div className="bg-warning rounded mx-2" onClick={()=>props.toogleeMode('warning')} style={{height : '30px' , width : '30px',cursor:'pointer'}}></div> */}
            {/* </div> */}
            {/* <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
             
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navclass;
