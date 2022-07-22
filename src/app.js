import express from 'express'
import morgan from 'morgan'

import auth from './routes/auth.routes.js'
import cors from 'cors'
const app = express();
// var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Bienvenido a Node JS..!');
});

app.use('/api/auth', auth)

export default app;