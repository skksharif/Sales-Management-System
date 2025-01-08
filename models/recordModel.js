const fs = require("fs");
const FILE_PATH = "records.json";

// Load records from file
exports.loadRecords = () => {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      fs.writeFileSync(FILE_PATH, JSON.stringify([])); // Initialize file with empty array
    }
    const fileContent = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(fileContent || "[]"); // Handle empty file case
  } catch (error) {
    console.error("Error loading records:", error);
    return [];
  }
};

// Save a new record
exports.saveRecord = (record) => {
  const records = this.loadRecords();
  records.push(record);
  fs.writeFileSync(FILE_PATH, JSON.stringify(records, null, 2));
};
