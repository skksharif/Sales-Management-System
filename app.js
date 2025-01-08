const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());  // This line is crucial
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const adminController = require("./controllers/adminController");
const salespersonController = require("./controllers/salespersonController");

app.get("/", (req, res) => res.render("login"));
app.post("/admin", adminController.viewRecords);
app.post("/salesperson", salespersonController.addRecordPage);
app.post("/salesperson/add", salespersonController.addRecord);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
