import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navclass extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
           <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          NewsZ
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
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
    )
  }
}

export default Navclass
