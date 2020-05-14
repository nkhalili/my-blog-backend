import express from 'express';

// to create our app
const app = express();

// to create an endpoint for our app (get request)
app.get('/hello', (req, res) => res.send('hello'));

// to add listener
app.listen(8000, () => console.log('Listening on port 8000'));
