import express, {json} from "express";
import "./db/mongoose.js";
import {indexProduct} from "./routes/routes.js";
const app = express();
const PORT = 8001;

app.use(json());

app.use("/api", indexProduct);

app.listen(PORT, () => {
   console.log(` app listening on port ${PORT}`);
});
