const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const auth = require('./server/middlewares/auth');

const api = require('./server/routes/api');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(auth());
app.use('/api', api);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => { console.log(`api on port: ${port}`); });