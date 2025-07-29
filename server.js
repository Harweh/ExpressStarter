// 26/june/2025
// Get request if from front end to back end
// endpoint :/
// Header(meta data)
const express = require('express')

const app = express()

app.use(express.json())


app.get('/', (req, res)=> {
    res.send('Hello welcome')
})

app.get('/page', (req, res) => {
    // res.send('this is page endpoint')
    const { name, age } = req.query
    if( name [0] == 'A' || name[0] == 'B') {
        return res.send('The name is starting with A or B')
    }

    res.send(`hello ${name}!!! you're ${ age } years old` )
})

app.get('/page/:id', (req, res) => {
    const { id } = req.params;
    res.send( `we're in page : ${id}`)
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    
})

// 1/july/2025
// What is POOST request
// postman
// postRequest is also frintEnd to back end, to send data from front end toback end we have to use post request
// endpoint:/
// method: POST
// header(meta data)
// body
// how to write a post request

// app.post( '/', (req, res) => {
//     const { email} = req.body;
//     res.send(`Password: 1234 for ${ email } `)
// })

// app.listen(3000, () => {
//     console.log('Server is live on http://localhost:3000');
    
// })


// //Database
// const users = [
//     {
//         email : 'Emmy@gmail.com',
//         password : 'password'
//     },

//      {
//         email : 'Awe@gmail.com',
//         password : 'password1'
//     }
// ]

// app.post('/Login', (req, res) => {
//      const { email, password } = req.body


//      users.forEach( user => {
//         if (email === user.email){
//             if ( password === user.password){
//                 return res.status(200).json({
//                     success: true,
//                     message: 'Login Successful'
//                 })
//             }
//             return res.status(400).json({
//                 success: false,
//                 message: 'Password is wrong'
//             })
//         }
         
//      })
//         return res.status(400).json({
//                 success : false,
//                 message : 'Email is wrong'
//             })
// })


// app.listen(3000, () => {
//     console.log('Server is live on http://localhost:3000');
    
// })



// 2nd/july/2025

app.post('/Login', (req, res)=> {
    try {

        const {email, password} = req.body

        console.log(!email || !password);
    
    
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'invalid email or password'
            })
        }


         const user = users.find (user => user.email === email)

        if(!user) {
            return res.status(400).json({
                success: false,
                message: 'Email not found or wrong'
            })
        }

        if(user.password !== password) {
                return res.status(400).json({
                success : false,
                message : 'Password is wrong'
            })
        }

        return res.status(200).json({
            success : true,
            message : 'Login succeessful'
        })
            
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
})


app.listen(3000, () => {
    console.log('Server is live on http://localhost:3000');
    
})




//Database
const users = [
    {
        email : 'Emmy@gmail.com',
        password : 'password'
    },

     {
        email : 'Awe@gmail.com',
        password : 'password1'
    }
]


app.post('/Signup', (req, res) => {

    try {

        const { email, password } = req.body

        users.push({
            'email' : email,
            'password' : password
        })

        res.status(200).json({
            success : true,
            'users' : users
        })
        
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
})




//write a get request to fetch all the users
app.get('/users', (req, res)=>{
    res.status(200).json({
        "x" : users
    })
})





app.listen(3000, () => {
    console.log('Server is live on http://localhost:3000');
    
})
