import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyle from "./style";

const vehicle_selected_icon =
  "https://res.cloudinary.com/niroavram/image/upload/v1636377669/sport-car_kehzgr.png";
export default function VehicleDetails(props) {
  const { vehicle } = props;
  const classes = useStyle();
  return (
    <Grid item className={classes.vehDet} xs={5}>
      <Grid className={classes.center} item xs={2}>
        <img
          src={vehicle_selected_icon}
          width="55vw"
          alt="In the chosen area"
        />
      </Grid>
      <Grid className={classes.back} item xs={11}>
        <Typography className={classes.title}> ID: {vehicle.id}</Typography>
        <Typography className={classes.subtitle}>
          {" "}
          Class : {vehicle.class.name} Seats : {vehicle.seats}
        </Typography>
      </Grid>
    </Grid>
  );
}
