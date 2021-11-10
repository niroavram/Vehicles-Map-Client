import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import DialogInformaton from "./Inforamtion";

const LOGO = "https://res.cloudinary.com/niroavram/image/upload/v1636356766/logo_ukicpq.png"


export default function Header() {
  const classes = useStyles();

  return (
    <Grid className={classes.header} >
    <img src={LOGO} alt="Logo" width="150vw"  height="35vh"/>
    <DialogInformaton />
    </Grid>
  );
}
