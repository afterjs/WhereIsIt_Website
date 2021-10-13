import React from "react";
import { Marker, Popup } from 'react-leaflet'
import '../Layout/MarkerMap.css'


export default props => {

    let pop = () => {

        return <Popup>
            <div className="al-ce">
                <p className={props.classe}>{props.name}</p>
                <div>
                    <div>
                        <span className="specsCoord">Latitude:</span> {props.lat}
                    </div>
                    <div>
                        <span className="specsCoord" > Longitude: </span>{props.long}
                    </div>
                </div>

                <div className="pd-div">
                    <button type="button" className="btn btn-dark">
                        Direção
                    </button>
                </div>
            </div>

            {/**/}
        </Popup>

    }

    return (
        <>
            <Marker position={[props.lat, props.long]} icon={props.icon}>{pop()}</Marker>
        </>
    )
}