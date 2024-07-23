import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors()); // tell our server to allow Cross Origin Resource Sharing

const images = [
  "https://www.rainforest-alliance.org/wp-content/uploads/2020/11/peruvian-amazon-rainforest-canopy.jpg.optimal.jpg",
  "https://image-v2.cdn.app.senecalearning.com/2018-03/7b115a84-5678-4721-a3a8-675ad60597b1/shutterstock_511745713,h_400,q_80,w_640.jpg",
];

app.get("/", function (request, response) {
  response.json("Hello?");
});

app.get("/images", function (request, response) {
  response.json(images);
});

app.listen(8080, function () {
  console.log("Listening to port 8080");
});
