const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/about", function (req, res) {
  res.send("Redirected to About Page");
})


app.listen(PORT, () => {
  console.log(`Node.js Express app running on port ${PORT}`);
})
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));

// app.set('view engine', 'ejs');

// const userRouter = require()

// app.use('/', useRouter);

// app.listen(3000);