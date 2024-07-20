const express = require('express');
const axios = require('axios');
const router = express.Router();

const { ServerConfig } = require('../../config');

console.log(ServerConfig.WINDOW_SIZE)

let windowNumbers = [];

const fetchNumbers = async (type) => {
	let url = '';
	switch (type) {
		case 'p':
			url = 'http://20.244.56.144/test/primes';
			break;
		case 'f':
			url = 'http://20.244.56.144/test/fibo';
			break;
		case 'e':
			url = 'http://20.244.56.144/test/even';
			break;
		case 'r':
			url = 'http://20.244.56.344/test/rand';
			break;
		default:
			return [];
	}

	try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${ServerConfig.ACCESS_TOKEN}`
            },
            timeout: ServerConfig.TIMEOUT
        });
        return response.data.numbers;
    } catch (error) {
		console.log(error);
        return [];
    }
};

const updateWindow = (newNumbers) => {
    const uniqueNumbers = new Set([...windowNumbers, ...newNumbers]);
    windowNumbers = Array.from(uniqueNumbers).slice(-ServerConfig.WINDOW_SIZE);
};

const calculateAverage = () => {
    if (windowNumbers.length === 0) return 0;
    const sum = windowNumbers.reduce((acc, num) => acc + num, 0);
    return sum / windowNumbers.length;
};

router.get('/numbers/:type', async (req, res) => {
    const type = req.params.type;
    const prevWindow = [...windowNumbers];
    
    const newNumbers = await fetchNumbers(type);
    updateWindow(newNumbers);

    const avg = calculateAverage();
    
    res.json({
        windowPrevState: prevWindow,
        windowCurrState: windowNumbers,
        numbers: newNumbers,
        avg: avg.toFixed(2)
    });
});

module.exports = router;