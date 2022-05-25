// import { Button } from "react-bootstrap";
// import "./styles.css";

// function Landing() {
//   return (
//     <div id="landing" className="container">
//       <div>

//       </div>
//       <div>

//       </div>
//       {/* <div className="block-grid">
//         <div className="card-item">
//           <Button>Impacto no meio Ambiente</Button>
//         </div>
//         <div className="card-item">
//           <Button>Reaproveitamento</Button>
//         </div>
//         <div className="card-item">
//           <Button>Teste</Button>
//         </div>
//         <div className="card-item">
//           <Button>Teste</Button>
//         </div>
//       </div> */}
//     </div>
//   );
// }

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map:any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

