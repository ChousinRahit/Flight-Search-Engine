import { INITIALIZEDATA, GET_CITIES, CHANGE_TAB, FILTER_DATA } from "./types";

// const FlightData = require("../../assets/flightData.json");
// const FlightData1 = require("../../assets/flightdata1.json");
import flights from "../../assets/fd";
import moment from "moment";

export const getData = () => ({
  type: INITIALIZEDATA,
  data: flights
});

export const getAllCities = () => {
  const cities = _getAllCities(flights);
  return {
    type: GET_CITIES,
    data: cities
  };
};

export const handleTabChange = v => {
  return {
    type: CHANGE_TAB,
    data: v
  };
};

export const filterFlights = obj => {
  return {
    type: FILTER_DATA,
    data: _filterWithData(obj)
  };
};

const _getAllCities = (flights = []) => {
  let cities = flights.map(f => {
    return f.from;
  });
  let uniqueCities = Array.from(new Set(cities));
  console.log(uniqueCities);
  return uniqueCities;
};

const _filterWithData = obj => {
  const { fr, to, dep, price } = obj;
  const depDate = new Date(dep).toString();
  return flights.filter(f => {
    const eachDate = new Date(f.departure).toString();
    if (f.from === fr && f.to === to && eachDate === depDate) {
      return _filterWithPrice(f, price);
    }
  });
};

const _filterWithPrice = (f, price) => {
  console.log(f.price, price[0]);
  if (f.price > price[0] && f.price < price[1]) {
    return true;
  }
};
