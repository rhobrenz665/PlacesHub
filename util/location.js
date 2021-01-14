const axios = require('axios');
const HttpError = require('../models/http-error');

const geoCodingAPIKEY = process.env.geoCodingAPIKEY;
const positionStackAPIKEY = process.env.positionStackAPIKEY;

async function getCoordsForAddress(address) {
  // Default Location
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516,
  // };

  // GeoCodingAPI
  // const response = await axios.get(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //     address
  //   )}&key=${geoCodingAPIKEY}`
  // );
  // const data = response.data;
  // if (!data || data.status === "ZERO_RESULTS") {
  //   const error = new HttpError(
  //     "Could not find location for the specified address.",
  //     422
  //   );
  //   throw error;
  // }
  // const coordinates = await data.results[0].geometry.location;
  // return coordinates;

  // Alternative API
  const response = await axios.get(
    `http://api.positionstack.com/v1/forward?access_key=${positionStackAPIKEY}&query=${address}&limit=1`
  );
  const responseData = response.data;
  if (!responseData || responseData.data.length === 0) {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }
  const coordinates = await responseData.data[0];
  return { lat: coordinates.latitude, lng: coordinates.longitude };
}

module.exports = getCoordsForAddress;
