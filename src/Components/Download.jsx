import React from "react";
import phones from "../Assets/Phones/phoneBlue.png";
import appStore from "../Assets/Store/appstore.png";
import playstore from "../Assets/Store/playstore.png";

export default (props) => {
  const phoneStyle = {
    height: "35rem",
  };

  const phoneSize = {
    height: "3rem",
  };

  return (
    <div className="sectionDonwload" id="download">
      <div className="aligDownloadSection">
        <div>
          <img src={phones} style={phoneStyle} />

          <div className="storeIconsDiv">
            <div>
              <img src={appStore} style={phoneSize} />
            </div>
            <div>
              <img src={playstore} style={phoneSize} />
            </div>
          </div>
        </div>
        <div className="downloadInformation">
          <h1 className="DownloadAppTittle">Downloads</h1>
          <p className="DownloadAppJustifyText">
            <span className="tab"></span>A nossa aplicação já se encontra disponível para Android e iOS. Para acederes a nossa app, clica no botão abaixo e faz download.
            Se tiveres algum problema, contacta-nos através do nosso email.
          </p>
        </div>
      </div>
    </div>
  );
};
