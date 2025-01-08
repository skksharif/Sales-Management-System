const { loadRecords } = require("../models/recordModel");

// Predefined admin credentials
const admins = [
  { username: "admin1", password: "admin123" },
  { username: "admin2", password: "admin456" },
];

exports.viewRecords = (req, res) => {

  const { username, password } = req.body;
  const admin = admins.find(
    (admin) => admin.username === username && admin.password === password
  );

  if (admin) {
    const records = loadRecords();
    res.render("admin", { records });
  } else {
    res.send("Invalid username or password! <a href='/'>Go back</a>");
  }
};