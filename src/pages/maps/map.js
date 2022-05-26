import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Search from "./search";

let service;
const google = window.google;
const libraries = ["places"];

const mapContainerStyle = {
  height: "50rem",
  width: "50rem",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: -23.630618,
  lng: -46.693256,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCBA4Lm2POl7b0LEF1n2H9-wH4uFC8Xo2Y",
    libraries
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback(map => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
    let map = mapRef.current;

    let request = {
      location: { lat, lng },
      radius: "500",
      type: ["hospital"]
    };

    service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);
    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          new google.maps.Marker({
            position: place.geometry.location,
            map
          });
        }
      }
    }
  }, []);

  return (
    <div>
      <Search panTo={panTo} />
      {isLoaded ? (
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          options={options}
          onLoad={onMapLoad}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

