//AIzaSyDGjgM5RZH4XWurR3l2Sj3jKyh3C6FAJI8 API key GoogleMAP javaScript
//AIzaSyBN8ZoDWmRVtxUvfrqTem3t6G88_GWt5nQ API Key PLacesAPi

import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DrawingManager,
  Polygon,
  
} from "@react-google-maps/api";
import mapStyle from "./mapStyle";
import axios from "axios";
import { Button, Container, Grid,Typography } from "@material-ui/core";
import useStyle from "./style"
import VehicleDetails from "./vehicleDetail";
import { version } from "react-dom";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "70vh",
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
const vehicle_selected_icon = "https://res.cloudinary.com/niroavram/image/upload/v1636386561/sport-car_1_sf3ggg.png";
const vehicle_icon = "https://res.cloudinary.com/niroavram/image/upload/v1636358117/car_gln7ul.png";
const select_area_icon = "https://res.cloudinary.com/niroavram/image/upload/v1636360749/select_ghmkok.png"
export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGjgM5RZH4XWurR3l2Sj3jKyh3C6FAJI8",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [vehicles, setVehicles] = React.useState([]);
  const [vehiclesInPolygon, setVehiclesInPolygon] = React.useState([]);
console.log(document.body.clientHeight)
  const onMapClick = React.useCallback((event) => {
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        },
      ]);
  },[])
  const clearPolygon =() => {
    setMarkers([])
    setVehiclesInPolygon([])
    window.scroll({
      top: 0,
      left: 0, 
      behavior: 'smooth',
    });
  }
  const classes = useStyle();
  const getVehiclesInPoly = ()=>{
    axios
    .post("https://vehiclemap.herokuapp.com/vehicles-in-polygon",{markers}, 
    {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => {
     
      setVehiclesInPolygon(res.data.vehicles_in_poly);
      window.scroll({
        top: document.body.clientHeight-500,
        left: 0, 
        behavior: 'smooth',
      });
    })
    .catch((err) => console.log(err));
  }
  const mapRef =  React.useRef();
  const onMapLoad =  React.useCallback((map)=>{
      mapRef.current=map;
  },[])

 
  const getVeheiclesLocation = () => {
    axios
      .get("https://vehiclemap.herokuapp.com/all-vehicles-location")
      .then((res) => {
        setVehicles(res.data.vehicles.vehicles_location);
      })
      .catch((err) => console.log(err));
  };
  if(vehicles.length<1){
      getVeheiclesLocation();
  }
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

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
                            repeat: "20px"
                        }
                    ]
                }}
            />
     
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{ url: select_area_icon,
                scaledSize: new window.google.maps.Size(30,30),
                origin: new window.google.maps.Point(0,0),
                anchor:  new window.google.maps.Point(15,15)
            }}
          />
        ))}
 
        {vehicles.map((vehicle) => (
          <Marker
            key={vehicle.id}
            position={{ lat: vehicle.location.lat, lng: vehicle.location.lng }}
            icon={{ url: vehiclesInPolygon.includes(vehicle)? vehicle_selected_icon:vehicle_icon,
            scaledSize: new window.google.maps.Size(30,30),
            origin: new window.google.maps.Point(0,0),
            anchor:  new window.google.maps.Point(15,15)
        }}
        onClick={()=>{
            setSelected(vehicle)
        }}  
          />
        ))}
               {selected?(<InfoWindow 
        position={{ lat: selected.location.lat,lng:selected.location.lng}}
        onCloseClick={()=>{
            setSelected(null);
        }}
        >
            <div>
                <h2>Vehicle Spotted!</h2>
                <p>
                     ID: {selected.id} <br/>
                     Seats: {selected.seats}<br/>
                     Class: {selected.class.name}

                </p>
            </div>
        </InfoWindow>):null}
      </GoogleMap>
      <Grid  className={classes.grid} container spacing={5}>
      <Grid item xs={12}>
          <Button className={classes.btn} onClick={getVehiclesInPoly} > Check Vehicles Inside Polygon</Button>
          <Button className={classes.btnClear} onClick={clearPolygon} >Clear Polygon</Button>
        </Grid>
        <Grid item xs={12}>
        <Typography className={classes.titleA}> {vehiclesInPolygon.length} Vehicles In This Area</Typography>
        </Grid>

        {vehiclesInPolygon.map((car)=>{
         return <VehicleDetails vehicle={car} />
        })}
        

      </Grid>
    </div>
  );
}
