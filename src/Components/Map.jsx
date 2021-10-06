import React, { useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerMap from ".//Layout/MarkerMap"
import L from 'leaflet';
import lixo from '../Images/Pins/lixo-pin.png'
import caixa from '../Images/Pins/caixa-pin.png'
import data from './/Data/mapData'

export default props => {
  
    let DEFAULT_LATITUDE = 41.695174467275805;
    let DEFAULT_LONGITUDE = -8.834282105916813;


    const icons = {
        lixoIcon : new L.Icon({
            iconUrl: lixo,
            iconRetinaUrl: lixo,
            popupAnchor:  [-0, -0],
            iconSize: [36,50],     
        }),
        caixaIcon : new L.Icon({
            iconUrl: caixa,
            iconRetinaUrl: caixa,
            popupAnchor:  [-0, -0],
            iconSize: [36,50],     
        })
    }

  



    function getMapData() {
        return data.map(schema => {
            let newIcon = null
            schema.icon===1 ? newIcon = icons.lixoIcon : newIcon = icons.caixaIcon
            return  <MarkerMap key={schema.id} lat={schema.lat} long={schema.long} icon={newIcon} classe={schema.classe} name={schema.name}></MarkerMap>
        })
    }
   
    return (
        <>
            <MapContainer center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]} zoom={14} scrollWheelZoom={true} attributionControl={false} >
                <TileLayer url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=ReDR1oFtIdDrGNpoYpt3"/>
                {getMapData()}
            </MapContainer>
        </>
    )

}

