import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Assure-toi que Leaflet soit bien importé


const LocationPicker = ({ setLocation }) => {
  const [position, setPosition] = useState([51.505, -0.09]);  // Position par défaut

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
    setLocation({ lat, lng });  // Mettre à jour la position
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "150px", width: "50%" }}
      onClick={handleMapClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>Emplacement sélectionné : {position.toString()}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationPicker;
