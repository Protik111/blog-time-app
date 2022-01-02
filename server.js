require('dotenv').config();
const http = require('http');
//import application
const app = require('./app/app');

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
})