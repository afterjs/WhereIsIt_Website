import React from "react";
import Map from "./Map";


export default props => {

    return (
        <div className="bgImage">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <div>
                                <p className="test-me">Card title</p>
                            </div>
                            <div>
                                <Map></Map>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
        </div>
    )
}


