const fs = require("fs");
const path = require("path");
const mockDataView = require("./user-api/mockData");

const {
  mockUser
} = mockDataView;


const data = JSON.stringify({
  mockUser
});

const filepath = path.join(__dirname, "../mockAPI/db.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});