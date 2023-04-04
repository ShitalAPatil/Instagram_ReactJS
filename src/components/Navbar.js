
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
<div className="container-fluid">
  {/* <a className="navbar-brand" href="">Instagram</a> */}
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Reels</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Notifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Messages</a>
      </li>
      
<li className="nav-item">
        <a className="nav-link active ">Create</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">Logout</a>
      </li>
      
     
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>


    </div>
  )
}









