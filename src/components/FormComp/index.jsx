import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  List,
  ListItem,
  Button,
  AppBar,
  Divider,
  MenuItem,
  InputLabel,
  TextField,
  Fab,
  FormControl,
  Select
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MySlider from "./MySlider";
import useStyles from "./useStyles";
import {
  getAllCities,
  handleTabChange,
  filterFlights
} from "../../store/actions";

function valuetext(value) {
  return `${value}k`;
}

const DrawerForm = ({ setMobileOpen }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    DepTime: "",
    arTime: "",
    pCount: 1
  });
  const cities = useSelector(state => state.cities);
  const dispatch = useDispatch();

  const [slrvalue, setSlralue] = React.useState([2000, 7007]);
  const isReturn = useSelector(state => state.isReturn);

  const handleChange = (event, newValue) => {
    console.log(event, newValue);
    setSlralue(newValue);
  };

  const onChangeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    dispatch(getAllCities());
  }, []);

  const handlePCount = v => {
    let pCount = formData.pCount + v;
    if (pCount >= 1) {
      setFormData({
        ...formData,
        pCount: pCount
      });
    }
  };

  const onSubmitHandler = () => {
    dispatch(
      filterFlights({
        fr: formData.fromCity,
        to: formData.toCity,
        dep: formData.DepTime,
        price: slrvalue
      })
    );
    setMobileOpen(false);
  };

  return (
    <div>
      <Typography className={classes.textHead}>Select Your Flight</Typography>
      <AppBar
        position="static"
        color="default"
        indicatorColor="primary"
        textColor="primary"
        noWrap
        className={classes.topBar}
      >
        <div className={classes.tabs}>
          <Button
            className={classes.tabbtn}
            color={isReturn ? "default" : "primary"}
            variant="contained"
            onClick={() => dispatch(handleTabChange(false))}
          >
            One-Way
          </Button>
          <Button
            className={classes.tabbtn}
            variant="contained"
            onClick={() => dispatch(handleTabChange(true))}
            color={isReturn ? "primary" : "default"}
          >
            Return
          </Button>
        </div>
      </AppBar>
      <Fragment>
        <List>
          <ListItem>
            <FormControl className={classes.formControl}>
              <InputLabel id="fromCity">Enter Origin City</InputLabel>
              <Select
                labelId="fromCity"
                name="fromCity"
                className={classes.SelectCity}
                value={formData.fromCity}
                onChange={e => onChangeHandler(e)}
                displayEmpty
              >
                {cities.length &&
                  cities.map(c => (
                    <MenuItem value={c} key={c}>
                      {c}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <FormControl>
              <InputLabel id="toCity">Enter Destination City</InputLabel>
              <Select
                labelId="toCity"
                name="toCity"
                className={classes.SelectCity}
                value={formData.toCity}
                onChange={e => onChangeHandler(e)}
                displayEmpty
              >
                {cities.length &&
                  cities.map(c => (
                    <MenuItem value={c} key={c}>
                      {c}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <TextField
              name="DepTime"
              label="Departure Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.SelectCity}
              InputLabelProps={{
                shrink: true
              }}
              onChange={e => onChangeHandler(e)}
              value={formData.DepTime}
            />
          </ListItem>
          {isReturn && (
            <ListItem>
              <TextField
                name="arTime"
                label="Return Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.SelectCity}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => onChangeHandler(e)}
                value={formData.arTime}
              />
            </ListItem>
          )}
          <ListItem>
            <div className={classes.fabIcons}>
              <InputLabel className={classes.passengersText}>
                Passengers
              </InputLabel>
              <Fab
                color="secondary"
                className={classes.fabIconSub}
                onClick={() => handlePCount(-1)}
              >
                <RemoveIcon />
              </Fab>
              <Fab variant="extended">{formData.pCount}</Fab>
              <Fab
                color="primary"
                className={classes.fabIconAdd}
                onClick={() => handlePCount(1)}
              >
                <AddIcon />
              </Fab>
            </div>
          </ListItem>
          <ListItem>
            <div>
              <Typography id="range-slider" gutterBottom>
                Price Range
              </Typography>
              <div className={classes.sliderValueShow}>
                <Typography className={classes.sliderValue}>
                  {slrvalue[0]}
                </Typography>
                <Typography className={classes.sliderValue}>
                  {slrvalue[1]}
                </Typography>
              </div>
              <MySlider
                value={slrvalue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                className={classes.slider}
                min={1000}
                max={15000}
              />
            </div>
          </ListItem>
          <ListItem>
            <Button variant="contained" onClick={onSubmitHandler}>
              Search
            </Button>
          </ListItem>
        </List>
      </Fragment>
    </div>
  );
};

export default DrawerForm;
