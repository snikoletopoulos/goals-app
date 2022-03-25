// @ts-ignore
module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						components: "./app/components",
						assets: "./app/assets",
						screens: "./app/screens",
						types: "./app/types",
					},
				},
			],
		],
	};
};
