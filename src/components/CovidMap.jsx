import React, { useState } from 'react';

import {Map,MapContainer,GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";

export default function CovidMap({countries}){

    const mapStyle={
        fillColor:"white",
        weight:1,
        color:"black",
        fillOpacity:1
    }
    const onEachCountry= (country , layer) => {
        console.log(country);

        layer.options.fillColor = country.properties.color;
        const name=country.properties.ADMIN;
        const confirmedText= country.properties.confirmedText;
        console.log(confirmedText);
        layer.bindPopup(`${name} , ${confirmedText}`);
    }

    //console.log(countries);

return (
    
        <div>
        <MapContainer style={{height:"90vh"}} zoom={2} center={[20,100]}>
            <GeoJSON data={countries}  style={mapStyle} onEachFeature={onEachCountry}/>
        </MapContainer>
         
      
        </div>
   
)
}