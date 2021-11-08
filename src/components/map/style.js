import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
  },
  grid: {
    width: "100vw",
    height: "80vh",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
  },
  btn: {
    width: "99vw",
    height: "9vh",
    backgroundColor: "#55c3ff",
    color: "#f7f5f9",
    fontSize: window.innerWidth * 0.022,
    borderRadius: 30
  },
  clearBtn: {
    position: 'relative',
    width: "10vw",
    height: "3vh",
    backgroundColor: "#282c34",
    color: "#06d6a0",
    fontSize: window.innerWidth * 0.015,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: -1
  },
  title: {
    // textAlign: "center",
    fontSize: "110%",
    color: "#2c2c2c",
  },
  titleA: {
    textAlign: "center",
    fontSize: "5vh",
    color: "#e36078",
    // backgroundColor: '#30e4d1'
  },
  subtitle: {
    textAlign: "center",
    fontSize: "50%",
    color: "#2c2c2c",
  },
  vehDet: {
    display: 'flex',
    borderRadius: 15,
    maxWidth: "90vw",
    maxHeight: "15vh",
    justifyContent: "center",
    backgroundColor: "#d6eaec",
    margin:5
  },
  back:{
      borderRadius: 15,
      padding:3,
      height: "110%",

  }
}));
export default useStyles;
