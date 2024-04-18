const {myWeb} = require("./data");

const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Request recived");
    
    res.end(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <title>Lorem Ipsum</title>
        <style>
            body {font-family: 'Raleway', sans-serif; margin: 50px; background-color: wheat;}
        </style>
    </head>
    <body>
        <h1>${myWeb.h1}</h1>
        <h2>${myWeb.h2}</h2>
        <p>${myWeb.p1}</p>
        <ul>
            <li>${myWeb.li1}</li>
            <li>${myWeb.li2}</li>
            <li>${myWeb.li3}</li>
        </ul>
        <p>${myWeb.p2}</p>
    </body>
    </html>`)

});

server.listen(8080, () => {
    console.log(`Server is listening on port
    http://localhost:${server.address().port}`);
});



