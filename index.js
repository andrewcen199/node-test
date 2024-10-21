const express = require('express');
// express app
const app = express();

//reigster view enginer
app.set('/view engine', 'ejs');

console.log('tester')
// listen for requests
app.listen(80);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.render('index');
  });

app.get('/about', (req, res) => {
    // res.send('<p>home page</p>');
    res.render('about')
});

app.use((req,res) => {
    res.render('404')
});
