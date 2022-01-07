import React, { useEffect, useState } from "react";
import "../App.css";
import CompanyLogo from "../Assets/logo.png";
import LogoutImg from "../Assets/logout.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState("");
  const [show, setShow] = useState(true);

  const LogoStyle = {
    width: "6rem",
  };

  const btnWallet = {
    backgroundColor: "#11272c",
    borderRadius: "20px",
  };

  const txtButton = {
    color: "white",
    fontFamily: "Roboto",
  };
  const underline = {
    textDecoration: "none",
  };
  const iconLogout = {
    width: "1rem",
  };

  const etherium = window.ethereum;

  let requesteWalletAcess = async () => {
    await etherium.send("eth_requestAccounts").then((res) => {
      console.log("is logged");
      setIsLogged(true);
      setAddress(res.result[0]);
    });
  };

  let tryOpenMetamask = () => {
    if (etherium) {
      console.log("metamask is installed");
      requesteWalletAcess();
    } else {
      setShow(true);
      toast.error("Precisas de ter a extensão MetaMask instalada!");
    }
  };

  let logout = () => {
    setIsLogged(false);
  };

  let getButtons = () => {
    if (isLogged) {
      return (
        <>
          {address.toString().substring(0, 7)} <img src={LogoutImg} style={iconLogout} />
        </>
      );
    } else {
      return "Connect Wallet";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pd nav-pos">
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
              <a target="_blank" className="nav-link titleNav" href="https://documenter.getpostman.com/view/18968972/UVRGFjpB">
                Documentação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link titleNav" href="#aboutapp">
                O que somos?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link titleNav" href="#download">
                Download
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link titleNav" href="#aboutus">
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link titleNav" href="#nfts">
                NFTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link titleNav" href="#contacts">
                Contactos
              </a>
            </li>

            <a
              className="underline"
              href="#"
              onClick={() => {
                {
                  isLogged ? logout() : tryOpenMetamask();
                }
              }}
              style={underline}
            >
              <li className="nav-item btnWallet">
                <a className="nav-link" style={txtButton}>
                  {getButtons()}
                </a>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
