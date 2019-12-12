import React from "react";
import FlightIcon from "@material-ui/icons/Flight";
import { Grid, Card, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const useStyles = makeStyles(theme => ({
  arrivdiparCon: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      width: "250px"
    }
  },
  flightHeadImg: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between"
    },
    display: "block",
    padding: "10px"
  },
  imgBtnContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 20px 0 20px",
    justifyContent: "center"
  },
  imgContainer: {
    textAlign: "center"
  },
  eachCard: {
    [theme.breakpoints.up("sm")]: {
      padding: "10px"
    },
    paddingBottom: "10px"
  },
  arrivdipar: {
    padding: "5px"
  },
  flightIcon: {
    transform: "rotate(0.25turn)",
    marginBottom: "-7px"
  },
  flightNumber: {
    fontSize: "10px"
  }
}));
const FlightCard = props => {
  const classes = useStyles();
  const { flight } = props;
  const isReturn = useSelector(state => state.isReturn);

  console.log(flight);
  const {
    flightNumber,
    airlineName,
    price,
    from,
    to,
    departure,
    departureTime,
    arrivalTime
  } = flight;

  return (
    <Grid item xs={12} md={12} lg={6} className={classes.eachCard}>
      <Card>
        <div>
          <div className={classes.flightHeadImg}>
            <div>
              <Typography variant="h5">₹ {price}</Typography>
              <div className={classes.arrivdiparCon}>
                <div className={classes.arrivdipar}>
                  <Typography className={classes.flightNumber}>
                    {flightNumber}
                  </Typography>
                  <Typography>
                    {from} <FlightIcon className={classes.flightIcon} /> {to}
                  </Typography>
                  <Typography>
                    Depart : {departure} {departureTime}
                  </Typography>
                  <Typography>Arrival :{arrivalTime} </Typography>
                </div>
                {isReturn && (
                  <div className={classes.arrivdipar}>
                    <Typography className={classes.flightNumber}>
                      AIV75
                    </Typography>
                    <Typography>
                      ppm <FlightIcon className={classes.flightIcon} /> inc
                    </Typography>
                    <Typography>Depart : 19:00</Typography>
                    <Typography>Depart : 19:00</Typography>
                  </div>
                )}
              </div>
            </div>
            <div className={classes.imgBtnContainer}>
              <div className={classes.imgContainer}>
                <img
                  src={require(`../../assets/imgs/${airlineName}.png`)}
                  width="100px"
                />
              </div>
              <Button variant="outlined">Book Now</Button>
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default FlightCard;
