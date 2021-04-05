// snowpack.config.js
const httpProxy = require("http-proxy");
const proxy = httpProxy.createServer({ target: "http://localhost:3001" });

module.exports = {
  routes: [
    {
      src: "/api/.*",
      dest: (req, res) => {
        // remove /api prefix (optional)
        req.url = req.url.replace(/^\/api/, "");

        proxy.web(req, res);
      },
    },
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
};
