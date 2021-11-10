import React , {useState} from "react";
import MapWidget from "./components/MapWidget/MapWidget";
import Header from "./components/Header/Header";
import VehiclesList from "./components/VehiclesList/VehiclesList";

const App = () => {
  const [vehiclesInPolygon, setVehiclesInPolygon] = useState([]);

  return (
    <div>
      <Header />
      <div>
      <MapWidget setVehiclesInPolygon={setVehiclesInPolygon} />
      <VehiclesList vehicles={vehiclesInPolygon} />
      </div>
    </div>
  );
}

export default App;
