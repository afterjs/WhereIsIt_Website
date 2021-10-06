import React from "react";
import '../App.css'
import CompanyLogo from "../Assets/mapa.png";


export default props => {

    const LogoStyle = {
        width: "6rem"
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pd">
                <div className="container-fluid">

                    <div className="logoDiv">
                        <img src={CompanyLogo} style={LogoStyle} />
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav navbar-rg">
                            <li className="nav-item">
                                <a className="nav-link titleNav">Sobre Nós</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link titleNav" >Download</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link titleNav" >Contactos</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
