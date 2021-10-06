import React from "react";
import { Marker, Popup } from 'react-leaflet'
import '../Layout/MarkerMap.css'


export default props => {
    return (
        <>
            <Marker position={[props.lat, props.long]} icon={props.icon}>
                <Popup> <span className={props.classe}> {props.name}</span><br/>
                    Latitude: {props.lat}
                    <br/>
                    Lontitude: {props.long}
                </Popup>
            </Marker>
        </>
    )
}