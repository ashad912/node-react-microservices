import mongoose from 'mongoose'

import { app } from './app'

start()

async function start() {
    validateEnv()

    try {

        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (err) {
        console.error(err)
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000')
    })
}

function validateEnv() {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }
}