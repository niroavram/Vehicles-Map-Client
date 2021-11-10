import React from "react";
import { Button, Grid } from "@material-ui/core";
import useStyle from "./style";

const MapActions = ({ onGetVehiclesInPolyClick, clearPolygon }) => {
  const classes = useStyle();

  return (
    <Grid className={classes.grid} container >
      <Grid className={classes.center} item xs={5} >
        <Button className={classes.btn} onClick={onGetVehiclesInPolyClick}>
          Check Marked Area For Vehicles
        </Button>
        <Button className={classes.btnClear} onClick={clearPolygon}>
          Clear Marked Area
        </Button>
      </Grid>
    </Grid>
  );
};

export default MapActions;
