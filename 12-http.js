const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("Our About page");
  } else {
    res.end(`
        <h1> Ooopss... </h1>
        <p>This is not I am looking for</p>
        <a href="/">Back to home page</a>
        `);
  }
});

server.listen(5000);
