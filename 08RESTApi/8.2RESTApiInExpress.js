//Building a rest api in express

import express from 'express'
import users from './MOCK_DATA.json' assert { type: 'json' }; 

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!')
})

//GET route to render a html 
app.get('/users', (req, res) => {
    res.send('<h1>Users</h1>')
})

//GET route to get all users from mock_data
app.get('/api/users', (req, res) => {
    res.send(users)
})

//GET route to get a single user from mock_data
//:id is a dynamic parameter
// app.get('/api/users/:id', (req, res) => {
//     const id = req.params.id
//     const user = users[id]
//     res.send(user)
// })

//POST request to create a new user
app.post('/api/users', (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.send(newUser)
})

// //PATCH request to update a user
// app.patch('/api/users/:id', (req, res) => {
//     const id = req.params.id
//     const updatedUser = req.body
//     users[id] = updatedUser
//     res.send(updatedUser)
// })

// //DELETE request to delete a user
// app.delete('/api/users/:id', (req, res) => {
//     const id = req.params.id
//     users.splice(id, 1)
//     res.send(users)
// })

//putting GET, PATCH, DELETE in a single route using .
app.route('/api/users/:id')
    .get((req, res) => {
        const id = req.params.id
        const user = users[id]
        res.send(user)
    })
    .patch((req, res) => {
        const id = req.params.id
        const updatedUser = req.body
        users[id] = updatedUser
        res.send(updatedUser)
    })
    .delete((req, res) => {
        const id = req.params.id
        users.splice(id, 1)
        res.send(users)
    })

app.listen(PORT, ()=>console.log(
    `Server is running on http://localhost:${PORT}`
    ))