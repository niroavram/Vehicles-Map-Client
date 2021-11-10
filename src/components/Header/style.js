import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#f8f9fa",
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "#9bf6ff",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
}));
export default useStyles;
