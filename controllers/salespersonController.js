const { loadRecords, saveRecord } = require("../models/recordModel");

// Predefined users with passwords
const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  { username: "user3", password: "pass3" },
];

// Render the Salesperson page after verifying the user
exports.addRecordPage = (req, res) => {
  const { username, password } = req.body;

  // Verify credentials
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.render("salesperson", { username: user.username });
  } else {
    res.send("Invalid username or password! <a href='/'>Go back</a>");
  }
};

exports.addRecord = (req, res) => {
  const { phone, amount, shoppingType, salesperson } = req.body;
  console.log(req.body); // Log the incoming data for debugging

  const newRecord = {                  // Customer Name
    phone,                          // Phone Number
    amount,                         // Sale amount
    shoppingType,                           // Type of shopping (mens wear, womens wear, both)
    date: new Date().toISOString(), // Sale date (today's date)
    salesperson,                    // Salesperson username (hidden)
    timestamp: new Date().toISOString(), // Timestamp for record creation
  };

  saveRecord(newRecord);

  // Send a success response
  res.json({ success: true, message: "Record added successfully!" });
};
