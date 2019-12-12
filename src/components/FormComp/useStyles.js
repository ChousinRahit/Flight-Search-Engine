import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  tabs: {
    display: "flex",
    justifyContent: "space-around",
    padding: "0px"
  },
  topBar: {
    backgroundColor: "#fff"
  },
  tabbtn: {
    width: "200px",
    border: "none"
  },
  textHead: {
    fontSize: "18px",
    padding: "10px"
  },
  SelectCity: {
    minWidth: 220
  },
  formControl: {
    height: "27px"
  },
  fabIconAdd: {
    width: "40px",
    height: "40px",
    marginLeft: "20px"
  },
  fabIconSub: {
    width: "40px",
    height: "40px",
    marginRight: "20px"
  },
  passengersText: {
    marginBottom: "10px"
  },
  slider: {
    fontSize: "30px"
  },
  sliderValueShow:{
      display:"flex",
      justifyContent:"space-between"
  },sliderValue:{
      padding:"5px",
      boxShadow:"inset 0px 0px 4px 0px #0000007e"
  }
}));

export default useStyles;
