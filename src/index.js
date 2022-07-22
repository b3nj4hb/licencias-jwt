import app from './app.js'
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor escuchando en el puerto: ", PORT)
});

// const express = require('express') ;
// const app = express();
// var cors = require('cors');
// app.use(express.json());
// app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('Bienvenido a Node JS...!');
// });
// // import auth from './routes/auth.routes'
// const auth = require('./routes/auth.routes')
// app.use('/api/auth', auth)

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, function () {
//     console.log('server listen on port: ', PORT);
// });