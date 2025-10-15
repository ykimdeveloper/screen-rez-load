import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[34.0522, -118.2437]}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[34.0522, -118.2437]}>
          <Popup>Los Angeles</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;