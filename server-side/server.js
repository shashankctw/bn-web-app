import express from "express";
import body from "body-parser";
import ejs from "ejs";


const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  