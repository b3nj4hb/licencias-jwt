import app from './app.js'
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor escuchando en el puerto: ", PORT)
});
