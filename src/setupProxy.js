const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	console.log(app);
	app.use(
		"/meet-before",
		createProxyMiddleware({
			target: "http://117.50.199.236:8081",
			changeOrigin: true,
			pathRewrite: {'^/meet-before': ''}
		})
	);
};