const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.json({message: "Hello World!"})
})

app.get('/client', (req,res) => {
    res.json({message: "Hello Client!"})
})

app.get('/friend', (req,res) => {
    res.json({message: "Hello Friend!"})
})

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// funzione per chiudere il server
const close = () => {
    server.close()
}
// funzione per esportare all'esterno, app per accedere a tutte le configurazioni del server
module.exports = {app, close}