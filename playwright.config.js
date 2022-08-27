/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'yarn build && yarn preview',
		port: 3000
	}
};

export default config;
