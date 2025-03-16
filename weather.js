const http = require('http');
const fs = require('fs');
const axios = require('axios');

const apiKey = '65bfba07f06053fd15a92367fb9997ec';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const homeFile = fs.readFileSync('index.html', 'utf-8');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/weather')) {
        const urlParams = new URLSearchParams(req.url.split('?')[1]);
        const city = urlParams.get('city');

        if (!city) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'City parameter is required' }));
            return;
        }

        axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                const data = response.data;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            })
            .catch(error => {
                console.error(error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error fetching weather data' }));
            });
    } else if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homeFile);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Server is live now');
});