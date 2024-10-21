const express = require('express');
// express app
const app = express();
console.log('tester')
// listen for requests
app.listen(80);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
  });

app.get('/about', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

app.use((req,res) => {
    res.sendFile('./views/404.html',  { root: __dirname });
});
