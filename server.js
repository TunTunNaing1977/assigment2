const express = require ('express')
const path = require('path')
const app = express()
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'home.html'))
})

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'contact.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000...')
})