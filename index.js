const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouther");
const bookRouter = require("./routes/bookRouther");
const indexRouter = require("./routes/indexRouther");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/about", function (req, res) {
  res.send("Redirected to About Page");
})

app.get("/contactMe", function (req, res) {
  res.send("Redirected to Contact Me Page");
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