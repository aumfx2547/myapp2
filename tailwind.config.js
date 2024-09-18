/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: [
		'./templates/**/*.html'
	],
	theme: {
		extend: {
			fontFamily: {
				angsana: ["Angsana New"],
				th_saraban: ["TH SarabunPSK"],
				taviraj: ["Taviraj"],
				athiti: ["Athiti"],
				kanit: ["Kanit"],
			},
		},
	},
	plugins: [],
}
