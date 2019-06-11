const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BACKEND_URL": prod
    ? "https://roadto4k.com/api"
    : "http://localhost:4000"
};
