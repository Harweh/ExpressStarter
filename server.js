const express = require('express')

const app = express()


app.get('/', (req, res)=> {
    res.send('Hello welcome')
})

app.get('/page', (req, res) => {
    // res.send('this is page endpoint')
    const { name, age } = req.query
    res.send(`hello ${name}!!! you're ${ age } years old` )
})

app.get('/page/:id', (req, res) => {
    const { id } = req.params;
    res.send( `we're in page : ${id}`)
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    
})
