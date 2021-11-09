//AIzaSyDGjgM5RZH4XWurR3l2Sj3jKyh3C6FAJI8 API key GoogleMAP javaScript
//AIzaSyBN8ZoDWmRVtxUvfrqTem3t6G88_GWt5nQ API Key PLacesAPi

import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./map/style";
import DialogInformaton from "./Inforamtion";
const logo = "https://res.cloudinary.com/niroavram/image/upload/v1636356766/logo_ukicpq.png"


export default function Header() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:"#f8f9fa",borderWidth:0.5,borderRadius:15,borderColor:"#9bf6ff",justifyContent:'center',textAlign:'center',display: 'flex'}} >
    <img src={logo} alt="Logo" width="150vw"  height="35vh"/>
    <DialogInformaton />

    </div>
  );
}
