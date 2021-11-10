import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
  },
  grid: {
    justifyContent: "center",
    display:'flex'
  },
  center: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  btn: {
    height: "6vh",
    backgroundColor: "#55c3ff",
    color: "#f7f5f9",
    borderRadius: 30,
    fontFamily: "Candara",
    textTransform: "none",
  },
  btnClear: {
    height: "6vh",
    backgroundColor: "#ec6e95",
    color: "#f7f5f9",
    borderRadius: 30,
    fontFamily: "Candara",
    textTransform: "none",
  },

  title: {
    fontSize: "90%",
    color: "#2c2c2c",
  },
  titleA: {
    textAlign: "center",
    fontSize: "5vh",
    color: "#e36078",
  },
  tit: {
    textAlign: "center",
    fontSize: "3vh",
    color: "#118ab2",
    paddingTop: 8,
    width: "120%",
  },
  subtitle: {
    fontSize: "85%",
    color: "#2c2c2c",
  },
  vehDet: {
    display: "flex",
    borderRadius: 15,
    maxWidth: "90vw",
    maxHeight: "15vh",
    justifyContent: "center",
    backgroundColor: "#d6eaec",
    margin: 5,
  },
  back: {
    borderRadius: 15,
    paddingLeft: 30,
    height: "110%",
  },
}));
export default useStyles;
