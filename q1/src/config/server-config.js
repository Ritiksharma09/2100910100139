const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
	WINDOW_SIZE: process.env.WINDOW_SIZE,
    TIMEOUT: process.env.TIMEOUT,
	ACCESS_TOKEN: process.env.ACCESS_TOKEN,
}