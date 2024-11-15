import http from "http";

// define the port number
const PORT = 3000;

// create HTTP server

const server = http.createServer((req, res) => {
  res.writeHead(500, { "Content-Type": "application.json" });
  res.end(JSON.stringify({ message: "Server Error" }));
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
