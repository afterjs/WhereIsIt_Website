import React from "react";
import Map from "./Map";
import phones from "../Images/phones.png"
import appStore from "../Images/appstore.png"
import playstore from "../Images/playstore.png"


export default props => {

    const phoneStyle = {
        height: "35rem",
    }

    const phoneSize = {
        height: "3rem"
    }

    return (
        <div className="bgImage">

            <div className="alignSection">
                <div>
                    <h1 className="test-me">Testa-me!</h1>
                    <Map></Map>
                </div>


                <div >
                    <img src={phones} style={phoneStyle} />

                    <div className="storeIconsDiv">
                        <div>
                            <img src={appStore} style={phoneSize}/>
                        </div>
                        <div>
                            <img src={playstore} style={phoneSize}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


