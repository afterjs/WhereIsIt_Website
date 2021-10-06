import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export default props => {
    const DEFAULT_LATITUDE = 41.8054144
    const DEFAULT_LONGITUDE = -8.8276992


    return (
        <>
            <MapContainer center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]} zoom={14} scrollWheelZoom={true} attributionControl={false} >
                <TileLayer
                    url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=ReDR1oFtIdDrGNpoYpt3"
                />
                <Marker position={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]}>
                    <Popup>
                        A pretty CSS3 popufffwafawffp. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )

}

