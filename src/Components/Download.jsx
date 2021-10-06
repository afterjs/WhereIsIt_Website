import React from "react";
import phones from "../Assets/Phones/phoneBlue.png"
import appStore from "../Assets/Store/appstore.png"
import playstore from "../Assets/Store/playstore.png"

export default (props) => {

    const phoneStyle = {
        height: "35rem",
    }

    const phoneSize = {
        height: "3rem"
    }

    return (
            <div className="sectionDonwload">
                <div className="aligDownloadSection">
                   
                    <div>
                        <img src={phones}  style={phoneStyle}/>

                        <div className="storeIconsDiv">
                        <div>
                            <img src={appStore} style={phoneSize}/>
                        </div>
                        <div>
                            <img src={playstore} style={phoneSize}/>
                        </div>
                    </div>
                        
                    </div>
                    <div className="downloadInformation">
                        <h1 className="DownloadAppTittle">Lorem Ipsum!</h1>
                        <p className="DownloadAppJustifyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque eget ante eu ligula iaculis scelerisque in et augue.
                            Maecenas rhoncus convallis massa.
                            Donec urna urna, pretium vitae nisi eget, efficitur tempor diam.
                            Pellentesque fringilla ipsum a urna dictum, vitae
                            tincidunt lectus ornare.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque eget ante eu ligula iaculis scelerisque in et augue.
                            Maecenas rhoncus convallis massa.
                            Donec urna urna, pretium vitae nisi eget, efficitur tempor diam.
                            Pellentesque fringilla ipsum a urna dictum, vitae
                            tincidunt lectus ornare.
                        </p>
                    </div>
                </div>
            </div>

    )

}