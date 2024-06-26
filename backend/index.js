import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book_model.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
// middleware for parsing Request Body
app.use(express.json());

// // middleware for handling CORS policy
// // option 1: allow all origins with deafault of cors(*)
// app.use(cors());

// // option 2: allow custom origins
// app.use(
//   cors({
//     origin:['https://book-mern-sahilgupta.vercel.app'],
//     methods:['GET','POST','PUT','DELETE'],
//     credentials: true
//   })
// );

// 3rd opionnnnnnn
// Use CORS middleware
app.use(cors({ origin: 'https://book-mern-sahilgupta.vercel.app' }));
const MY_CUSTOM_PORT = process.env.PORT || 3001;
app.listen(MY_CUSTOM_PORT, () => {
  console.log(`Server is running on port ${MY_CUSTOM_PORT}`);
});




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
