import express from 'express'

const server = express()

const rootPath = './src'
const port = 8000

server.use(express.static(rootPath))

// Redirect to signin/Account 
server.get('/', (req, res) => {
    res.redirect('/signin')
})

// Signin
server.get('/signin', (req, res) => {
    res.sendFile('features/signin/signin.html', { root: rootPath })
})

// Signout 
server.get('/signup', (req, res) => {
    res.sendFile('features/signup/signup.html', { root: rootPath })
})

// Forget password
server.get('/forget-password', (req, res) => {
    res.sendFile('features/forget-password/forget-password.html', { root: rootPath })
})

// Account
server.get('/account', (req, res) => {
    res.sendFile('features/account/account.html', { root: rootPath})
})

server.listen(port, () => {
    console.log(`Server list on port ${port}`)
})