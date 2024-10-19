// src/components/MapComponent.tsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import logo from '../images/Logo.jpeg'; // Importar la imagen correctamente

// Define la posición del marcador
const position: [number, number] = [21.8854, -102.2916]; // Coordenadas de ejemplo

// Icono del marcador
const markerIcon = new L.Icon({
  iconUrl: logo, // Usar la imagen importada
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent: React.FC = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          Aquí puedes colocar información sobre el lugar.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
