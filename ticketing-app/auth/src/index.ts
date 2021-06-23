import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import mongoose from 'mongoose'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'

import errorHandler from './middlewares/error-handler'
import { NotFoundError } from './errors'
import { Mongoose } from 'mongoose'

const app = express()

app.use(json())


app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

// No matter which type of request!
app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

start()

async function start() {
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