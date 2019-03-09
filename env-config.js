const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BACKEND_URL": prod
    ? "https://roadto4k-server.herokuapp.com"
    : "http://localhost:4000"
};
