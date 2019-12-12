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
  const { fr, to } = obj;

  return flights.filter(f => {
    if (f.from === fr && f.to === to) {
      return true;
    }
  });
};
