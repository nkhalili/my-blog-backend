import express from 'express';
import bodyParser from 'body-parser';

// to create our app
const app = express();

app.use(bodyParser.json());

// to create an endpoint for our app (get request)
app.get('/hello', (req, res) => res.send('hello'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

// to add listener
app.listen(8000, () => console.log('Listening on port 8000'));
