const PROXY_CONFIG = [
  {
    context: [
      "/api/json-server/v1"
    ],
    target: "http://localhost:3000",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api/json-server/v1": ""
    }
  }
]

module.exports = PROXY_CONFIG;
