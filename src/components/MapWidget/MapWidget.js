import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polygon,
} from "@react-google-maps/api";
import mapStyle from "./mapStyle";
import useStyle from "./style";
import { getVeheiclesLocation, getVehiclesInPoly } from "../../services/api";
import MapActions from "./MapActions";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "60vh",
};

const center = {
  lat: 51.4694976807,
  lng: -0.0493916683,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};

const vehicle_selected_icon =
  "https://res.cloudinary.com/niroavram/image/upload/v1636386561/sport-car_1_sf3ggg.png";
const vehicle_icon =
  "https://res.cloudinary.com/niroavram/image/upload/v1636358117/car_gln7ul.png";
const select_area_icon =
  "https://res.cloudinary.com/niroavram/image/upload/v1636360749/select_ghmkok.png";

export default function Map({ setVehiclesInPolygon }) {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const classes = useStyle();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGjgM5RZH4XWurR3l2Sj3jKyh3C6FAJI8",
    libraries,
  });

  useEffect(async () => {
    const vehicles = await getVeheiclesLocation();
    setVehicles(vehicles.data.vehicles.vehicles_location);
  }, []);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const clearPolygon = useCallback(() => {
    setMarkers([]);
    setVehiclesInPolygon([]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onGetVehiclesInPolyClick = useCallback(async () => {
    const vehicles = await getVehiclesInPoly(markers);
    setVehiclesInPolygon(vehicles.data.vehicles_in_poly);
  });

  if (loadError) return <div>Error loading maps</div>;

  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Polygon
          path={markers}
          geodesic={true}
          options={{
            strokeColor: "#ff2527",
            strokeOpacity: 0.75,
            strokeWeight: 2,
            icons: [
              {
                icon: select_area_icon,
                offset: "0",
                repeat: "20px",
              },
            ],
          }}
        />

        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: select_area_icon,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
          />
        ))}

        {vehicles.map((vehicle) => (
          <Marker
            key={vehicle.id}
            position={{ lat: vehicle.location.lat, lng: vehicle.location.lng }}
            icon={{
              url: vehicle_icon,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onDblClick={() => {
              setSelected(vehicle);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{
              lat: selected.location.lat,
              lng: selected.location.lng,
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Vehicle Spotted!</h2>
              <p>
                ID: {selected.id} <br />
                Seats: {selected.seats}
                <br />
                Class: {selected.class.name}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <MapActions
        onGetVehiclesInPolyClick={onGetVehiclesInPolyClick}
        clearPolygon={clearPolygon}
      />
    </div>
  );
}
