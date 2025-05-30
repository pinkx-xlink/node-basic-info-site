const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);



// app.get("/", (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get("/about", function (req, res) {
//   res.send("Redirected to About Page");
// })

// app.get("/contactMe", function (req, res) {
//   res.send("Redirected to Contact Me Page");
// })


// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Node.js Express app running on port ${PORT}`);
})
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));

// app.set('view engine', 'ejs');

// const userRouter = require()

// app.use('/', useRouter);

// app.listen(3000);