import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator' // We need valdiate request body
import { User } from '../models/user'
import { RequestValidationError, DatabaseConnectionError, BadRequestError } from '../errors'
// validationResult is used to pull out validation information
// It appends some fields to req object

const router = express.Router()

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 chars')
],
    // Typescript is angry, because req and res have no them types specifed.
    // Need to import Request and Response types from express.
    async (req: Request, res: Response) => {
        const errors = validationResult(req) // Kinda Object

        if (!errors.isEmpty()) {
            // Collecting error reasons in JS way...
            // TS does not allow to attach non-existing prop to existing object!
            // In TS we need to build subclass.
            /*

            const error = new Error('Invalid email or password')
            error.reasons = errors.array() // Invoke errors method converting object to array
            throw error
            
            */

            throw new RequestValidationError(errors.array())
        }

        const { email, password } = req.body

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            throw new BadRequestError('Email in use')
        }

        const user = User.build({ email, password })
        await user.save()

        res.status(201).send(user)

        //throw new DatabaseConnectionError()
        //res.send({})
    })

export { router as signupRouter }