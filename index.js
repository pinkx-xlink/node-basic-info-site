const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
// This enables EJS as the view engine
const path = require("node:path");

// express.static() is a middleware function that enables the use of static assets, and we tell it to look for assets with the public directory as the root.
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index", { message: "EJS rocks!!" });
// });

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
})

app.get("/about", (req, res) => {
  res.render("about", { message: "EJS rocks!" });
});

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
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
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