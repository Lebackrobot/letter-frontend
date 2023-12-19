import express from 'express'
import cors from 'cors'

const server = express()

const rootPath = './src'
const port = 4000

server.use(cors())
server.use(express.static(rootPath))

// Redirect to /webproxy 
server.get('/', (req, res) => {
    res.sendFile('index.html', { root: rootPath })
})

// Webproxy
server.get('/webproxy', (req, res) => {
    res.sendFile('webproxy.html', { root: rootPath })
})

// Listen on port 4000
server.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})