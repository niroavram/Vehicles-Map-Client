import React from "react";
import {GoogleMap,useLoadScript,Marker,InfoWindow} from "@react-google-maps/api"
import Map from "./components/map/map";
import Header from "./components/Header"
const libraries = ["places"]
const mapContainerStyle = {
  width: "50vw",
  height: "50vh"
}
const center = {
  lat:51.4694976807,
  lng:-0.0493916683,
}
const options ={

}
export default function App() {
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_JAVASCRIPT_API_KEY,
    libraries
  })
  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading maps";
  return (
    <div style={{backgroundColor: '#f7f5f9'}} >
      <Header />
     <Map />
    </div>
  );
}
