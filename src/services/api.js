import axios from "axios";

export const getVeheiclesLocation = async () => {
  try {
    const res = await axios.get(
      "https://vehiclemap.herokuapp.com/all-vehicles-location"
    );

    return res;
  } catch (e) {
    throw new Error("error fetching vehicales", e);
  }
};

export const getVehiclesInPoly = async (markers) => {
  try {
    const res = await axios.post(
      "https://vehiclemap.herokuapp.com/vehicles-in-polygon",
      { markers },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (e) {
    throw new Error("error fetching vehicales", e);
  }
};
