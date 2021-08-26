import mongoose from 'mongoose'

import { app } from './app'

start()

async function start() {
    validateEnv()

    try {

        await mongoose.connect(process.env.MONGO_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (err) {
        console.error('Connection error', err)
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000')
    })
}

function validateEnv() {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined')
    }
}