const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 3000;


 console.log(zipdb.byCity);

/*  For testing prp
app.get('/zip/11238', (req, res) => {
  res.json({City: "BROOKLYN",
  Country: "US",
  Decommisioned: "false",
  EstimatedPopulation: "37151",
  Lat: "40.64",
  Location: "NA-US-NY-BROOKLYN",
  LocationText: "Brooklyn, NY",
  LocationType: "PRIMARY",
  Long: "-73.94",
  Notes: "",
  RecordNumber: "9396",
  State: "NY",
  TaxReturnsFiled: "26156",
  TotalWages: "1236922826",
  WorldRegion: "NA",
  Xaxis: "0.20",
  Yaxis: "-0.72",
  Zaxis: "0.65",
  ZipCodeType: "STANDARD",
  Zipcode: "11238"});
});
app.get('/zip/11239', (req, res) => {
  res.json({City: "BROOKLYN",
  Country: "US",
  Decommisioned: "false",
  EstimatedPopulation: "37151",
  Lat: "40.64",
  Location: "NA-US-NY-BROOKLYN",
  LocationText: "Brooklyn, NY",
  LocationType: "PRIMARY",
  Long: "-73.94",
  Notes: "",
  RecordNumber: "9396",
  State: "NY",
  TaxReturnsFiled: "26156",
  TotalWages: "1236922826",
  WorldRegion: "NA",
  Xaxis: "0.20",
  Yaxis: "-0.72",
  Zaxis: "0.65",
  ZipCodeType: "STANDARD",
  Zipcode: "11239"});
});*/


app.get('/zip/:zipcode', (req, res) => {
  const zip = zipdb.byZip[req.params.zipcode];
  	res.json(zip);
  }//I have to catch an exeption when zip is not inserted
);


app.get('/city/:cityname', (req, res) => {
  const city = zipdb.byCity[req.params.cityname];
  // saving entry in the city from zipdb databse byCity from where City name = @cityname 
  	res.json(city);
  }
);


app.get('/state/:sp', (req, res) => {
  /* test
  if (sp === underfined)
  throw(Exeption);
  */
  const st = zipdb.byState[req.params.sp];
  	res.json(st);
  }
);






app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
