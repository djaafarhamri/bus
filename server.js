const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const busRoute = require("./routes/busRoute");
const truckRoute = require("./routes/truckRoute");
const colisRoute = require("./routes/colisRoute");
const personneRoute = require("./routes/personneRoute");


const PORT = process.env.PORT || 4000;
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "X-HTTP-Method-Override, Accept, Authorization, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

app.use(cookieParser());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());

// use routes

// Connect to the db

mongoose
  .connect("mongodb://localhost:27017/bus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log("listening on port : ", PORT);
    });
  })
  .catch((err) => console.log(err));

app.use("/user", userRoute);
app.use("/bus", busRoute);
app.use("/truck", truckRoute);
app.use("/colis", colisRoute);
app.use("/personne", personneRoute);


