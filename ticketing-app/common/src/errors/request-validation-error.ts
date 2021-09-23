import { ValidationError } from 'express-validator'
import { CustomError } from './custom-error'

//WARNING: import { CustomError } from '.' makes circural dependency!!!

// Validating serializeError() output - Option #1 - Creating interface

/*
interface CustomError {
    statusCode: number
    serializeErrors(): {
        message: string
        field?: string
    }[]
}
*/

// Validating serializeError() output - Option #2 - Creating abstract class

// Abstract class
// - cannot be instantiated
// - used to setup requirements for subclasses
// - do create a Class when translated to JS, which means we can use it in 'instanceof' checks

// custom-error.ts

export class RequestValidationError extends CustomError {
    statusCode = 400;
    // private errors: ValidationError[]

    // is equivalent to:

    // error: ValidationError[]
    // this.errors = errors

    constructor(private errors: ValidationError[]) {
        super('Invalid request parameters') // Passed for logging purposes

        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map(error => {
            return {
                message: error.msg,
                field: error.param
            }
        });
    }

}