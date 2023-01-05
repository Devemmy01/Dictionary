module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};