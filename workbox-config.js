module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{xml,php,css,TTF,eot,svg,ttf,woff,woff2,otf,jpg,png,jpeg,js,less,json,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};