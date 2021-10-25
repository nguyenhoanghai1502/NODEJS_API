const app = require("./app");
const port = process.env.PORT;

app.get("/", function (req, res) {
  res.send("Active");
});
app.listen(port, () => {
  console.log("App runs on port " + port);
});
