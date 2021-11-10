import React from "react";
import VehicleDetails from "./VehicleDetail";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "../MapWidget/style";

const VehiclesList = ({ vehicles }) => {
  const classes = useStyles();
  console.log(vehicles);
  return (
    <div>
      <Grid item xs={12}>
        <Typography className={classes.titleA}>
          {" "}
          {vehicles.length} Vehicles In This Area
        </Typography>
      </Grid>
      <Grid container >
      {vehicles.map((car) => {
        return <VehicleDetails key={car.id} vehicle={car} />;
      })}
      </Grid>
    
    </div>
  );
};

export default VehiclesList;
