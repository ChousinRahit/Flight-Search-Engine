import uuid from "uuid/v4";

const flights = [
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 60,
    isReturn: 0
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "AI-102",
    departure: "18-01-2020",
    departureTime: "21:00 AM",
    arrivalTime: "23:10 AM",
    price: 70,
    isReturn: 7
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 0
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "SG-102",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 99,
    isReturn: 8
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "6E-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 59,
    isReturn: 10
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "6E-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 60,
    isReturn: 0
  },
  {
    airlineName: "spicejet",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "SG-103",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 72,
    isReturn: 9
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "SG-104",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 63,
    isReturn: 14
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "AI-102",
    departure: "18-01-2020",
    departureTime: "16:00 AM",
    arrivalTime: "17:30 PM",
    price: 70,
    isReturn: 10
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 9
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "AI-102",
    departure: "18-01-2020",
    departureTime: "20:10 AM",
    arrivalTime: "13:10 AM",
    price: 42,
    isReturn: 0
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "AI-103",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 80,
    isReturn: 9
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "AI-104",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 40,
    isReturn: 18
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "AI-101",
    departure: "19-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 11
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "AI-102",
    departure: "19-01-2020",
    departureTime: "16:00 AM",
    arrivalTime: "17:30 PM",
    price: 70,
    isReturn: 0
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "AI-101",
    departure: "19-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 9
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "AI-102",
    departure: "19-01-2020",
    departureTime: "20:10 AM",
    arrivalTime: "13:10 AM",
    price: 42,
    isReturn: 13
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "AI-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 5,
    isReturn: 16
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "AI-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 70,
    isReturn: 0
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "AI-101",
    departure: "20-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 10
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "AI-102",
    departure: "20-01-2020",
    departureTime: "16:00 AM",
    arrivalTime: "17:30 PM",
    price: 70,
    isReturn: 8
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "AI-101",
    departure: "20-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 14
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "AI-102",
    departure: "20-01-2020",
    departureTime: "20:10 AM",
    arrivalTime: "13:10 AM",
    price: 42,
    isReturn: 8
  },

  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "6E-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 44,
    isReturn: 5
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "6E-102",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 66,
    isReturn: 15
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "6E-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 42,
    isReturn: 6
  },
  {
    airlineName: "indigo",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "6E-102",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 66,
    isReturn: 10
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "6E-103",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 58,
    isReturn: 16
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "6E-104",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 49,
    isReturn: 10
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "6E-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 59,
    isReturn: 11
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "6E-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 60,
    isReturn: 16
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "6E-101",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    price: 42,
    isReturn: 11
  },
  {
    airlineName: "indigo",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "6E-102",
    departure: "20-01-2020",
    arrivalTime: "12:10 AM",
    price: 66,
    isReturn: 14
  },
  {
    airlineName: "spicejet",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "SG-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 75,
    isReturn: 13
  },

  {
    airlineName: "spicejet",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "SG-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 55,
    isReturn: 10
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Delhi",
    toAirport: "DEL",
    flightNumber: "SG-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 61,
    isReturn: 12
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Mumbai",
    toAirport: "BOM",
    flightNumber: "SG-101",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 47,
    isReturn: 10
  },
  {
    airlineName: "spicejet",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Pune",
    toAirport: "PNQ",
    flightNumber: "SG-102",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 70,
    isReturn: 9
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 60,
    isReturn: 8
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "AI-102",
    departure: "18-01-2020",
    departureTime: "21:00 AM",
    arrivalTime: "23:10 AM",
    price: 70,
    isReturn: 11
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 11
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "SG-102",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 99,
    isReturn: 12
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "6E-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 59,
    isReturn: 12
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "6E-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 60,
    isReturn: 9
  },
  {
    airlineName: "spicejet",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "SG-103",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 72,
    isReturn: 13
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "SG-104",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 63,
    isReturn: 12
  },
  {
    airlineName: "air-india",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "AI-102",
    departure: "18-01-2020",
    departureTime: "16:00 AM",
    arrivalTime: "17:30 PM",
    price: 70,
    isReturn: 5
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 5
  },
  {
    airlineName: "air-india",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "AI-102",
    departure: "18-01-2020",
    departureTime: "20:10 AM",
    arrivalTime: "13:10 AM",
    price: 42,
    isReturn: 9
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "AI-103",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 80,
    isReturn: 10
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "AI-104",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 40,
    isReturn: 11
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "19-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 15
  },
  {
    airlineName: "air-india",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "AI-102",
    departure: "19-01-2020",
    departureTime: "16:00 AM",
    arrivalTime: "17:30 PM",
    price: 70,
    isReturn: 12
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "19-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 18
  },
  {
    airlineName: "air-india",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "AI-102",
    departure: "19-01-2020",
    departureTime: "20:10 AM",
    arrivalTime: "13:10 AM",
    price: 42,
    isReturn: 24
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "AI-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 5,
    isReturn: 12
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "AI-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 70,
    isReturn: 13
  },
  {
    airlineName: "air-india",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "20-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 15
  },
  {
    airlineName: "air-india",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "AI-102",
    departure: "20-01-2020",
    departureTime: "16:00 AM",
    arrivalTime: "17:30 PM",
    price: 70,
    isReturn: 0
  },
  {
    airlineName: "air-india",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "20-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 0
  },
  {
    airlineName: "air-india",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "AI-102",
    departure: "20-01-2020",
    departureTime: "20:10 AM",
    arrivalTime: "13:10 AM",
    price: 42,
    isReturn: 10
  },

  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "6E-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 42,
    isReturn: 0
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "6E-102",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 66,
    isReturn: 6
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "6E-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 42,
    isReturn: 0
  },
  {
    airlineName: "indigo",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "6E-102",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 66,
    isReturn: 0
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "6E-103",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 58,
    isReturn: 0
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "6E-104",
    departure: "19-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 49,
    isReturn: 0
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "6E-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 59,
    isReturn: 0
  },
  {
    airlineName: "indigo",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "6E-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 60,
    isReturn: 0
  },
  {
    airlineName: "indigo",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "6E-101",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    price: 42,
    isReturn: 6
  },
  {
    airlineName: "indigo",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "6E-102",
    departure: "20-01-2020",
    arrivalTime: "12:10 AM",
    price: 66,
    isReturn: 4
  },
  {
    airlineName: "spicejet",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "SG-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 75,
    isReturn: 10
  },

  {
    airlineName: "spicejet",
    from: "Delhi",
    fromAirport: "DEL",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "SG-105",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 55,
    isReturn: 11
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Chennai",
    toAirport: "CHE",
    flightNumber: "SG-106",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 61,
    isReturn: 9
  },
  {
    airlineName: "spicejet",
    from: "Pune",
    fromAirport: "PNQ",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "SG-101",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 47,
    isReturn: 13
  },
  {
    airlineName: "spicejet",
    from: "Bengaluru",
    fromAirport: "BEN",
    to: "Kolkatta",
    toAirport: "COL",
    flightNumber: "SG-102",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 70,
    isReturn: 19
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 11
  },

  {
    airlineName: "air-india",
    from: "Chennai",
    fromAirport: "CHE",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "18-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 8
  },

  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "19-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 0
  },

  {
    airlineName: "air-india",
    from: "Chennai",
    fromAirport: "CHE",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "19-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 0
  },
  {
    airlineName: "air-india",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "20-01-2020",
    departureTime: "12:00 AM",
    arrivalTime: "13:30 PM",
    price: 101,
    isReturn: 1
  },

  {
    airlineName: "air-india",
    from: "Chennai",
    fromAirport: "CHE",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "AI-101",
    departure: "20-01-2020",
    departureTime: "07:00 AM",
    arrivalTime: "10:30 AM",
    price: 130,
    isReturn: 10
  },

  {
    airlineName: "indigo",
    from: "Chennai",
    fromAirport: "CHE",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "6E-101",
    departure: "18-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 42,
    isReturn: 11
  },
  {
    airlineName: "indigo",
    from: "Chennai",
    fromAirport: "CHE",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "6E-101",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    price: 42,
    isReturn: 9
  },

  {
    airlineName: "spicejet",
    from: "Mumbai",
    fromAirport: "BOM",
    to: "Bengaluru",
    toAirport: "BEN",
    flightNumber: "SG-101",
    departure: "20-01-2020",
    departureTime: "10:00 AM",
    arrivalTime: "12:10 AM",
    price: 47,
    isReturn: 4
  }
];

flights.forEach(flight => {
  flight.id = uuid();
  flight.price = flight.price + "00";
});

export default flights;
