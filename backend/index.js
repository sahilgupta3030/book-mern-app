import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book_model.js";
import booksRoute from "./routes/booksRoute.js";
// import cors from "cors";

const app = express();
// middleware for parsing Request Body
app.use(express.json());

// // middleware for handling CORS policy
// // option 1: allow all origins with deafault of cors(*)
// app.use(cors());

// // option 2: allow custom origins
const cors=require('cors')
app.use(
  cors({
    origin:['https://book-mern-sahilgupta.vercel.app'],
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
  })
);

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)



// app.get("/", (request, response) => {
//   console.log(request);
//   return response.status(234).send("Happy to MERN stack tutorial..");
// });

app.get("/", (request, response) => {
 response.json("Everything is Fine.."); 
})

app.use("/books", booksRoute);



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to Mongo Database.");
    app.listen(PORT, () => {
      console.log(`The port is listening to ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Error!");
  });
