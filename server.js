const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get("/api/fun-fact", async (req, res)=>{

    try {

        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const factText = response.data.text;
        res.json({fact: factText
    });

    } catch (error) {
        if (error.response) {

            console.error('API Error', error.repsonse,status, error.reposnse.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });

        } else {
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`--- The Daily Grind Server Running ---`);
    console.log(`Server is active on: http://localHost:${PORT}`);
    console.log(`Endpoint available: http://localHost:${PORT}/api/fun-fact`);
});
