const express = require('express')
const { db, startdb } = require('./db')

const app = express()
app.use(express.json())

app.post('/create', (req, res, next) => {
    const payload = req.body
    db('users').insert(payload)
        .then((id) => {
            return res.status(200).json({
                id
            })
        })
        .catch(err => {
            next(err)
        })
})

app.get('/', (req, res, next) => {
    db.select('*').table('users')
        .then((users) => {
            console.log('Users:', users);
            return res.status(200).json({
                users
            })
        })
        .catch((err) => {
            next(err)
        });
})

app.use((err, req, res, next) => {
    if (err) return res.status(500).json({
        error: err.message
    })
})

app.listen(3000, () => {
    startdb()
    console.log('server is runnning');
})