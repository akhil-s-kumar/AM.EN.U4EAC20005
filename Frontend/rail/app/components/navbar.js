import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src='./logo.png' width={50}></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link">Trains</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Booking</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Careers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Faq's</a>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <button class="btn btnSolid me-3" type="submit">Sign In</button>
                            <button class="btn btnBorder" type="submit">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar