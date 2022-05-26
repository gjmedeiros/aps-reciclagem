import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];

const mapContainerStyle = {
  height: "75rem",
  width: "75rem",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: -23.630618,
  lng: -46.693256,
};

let points = [
  {
    lat: -23.63598,
    lng: -46.713319,
  },
  {
    lat: -23.646566,
    lng: -46.709545,
  },
  {
    lat: -23.64939,
    lng: -46.711507,
  },
];
export default function useMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCBA4Lm2POl7b0LEF1n2H9-wH4uFC8Xo2Y",
    libraries,
  });

  const [map, setMap] = React.useState(/** @type google.maps.Map */ (null));
  const [selected, setSelected] = React.useState(null);

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={map => setMap(map)}
      >
        <Marker position={points[0]} />
        <Marker position={points[1]} />
        <Marker position={points[2]} />
      </GoogleMap>
    </div>
  );
}

