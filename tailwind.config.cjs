const config = {
	content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    ],

	theme: {
		extend: {
      colors: {
        blue: "#263c69"
      },
      fontFamily: {
        nasalization: ['Nasalization', 'sans-serif']
      }
    }
	},

	plugins: [
        require('flowbite/plugin')
    ],
    darkmode: 'class',
};

module.exports = config;
