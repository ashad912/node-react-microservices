import { Request, Response, NextFunction } from "express";
import { CustomError } from '../errors'


export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    /* Legacy code - before serializeError()
    if (err instanceof RequestValidationError) {
        // err.errors <- RequestValidationError 'errors' field has to be public! 
        const formattedErrors = err.errors.map(error => {
            return {
                message: error.msg,
                field: error.param
            }
        });
        return res.status(400).send({ errors: formattedErrors })
    }

    if (err instanceof DatabaseConnectionError) {
        return res.status(500).send({ errors: [{ message: err.reason }] })
    }
    */

    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() })
    }

    console.error(err)

    res.status(400).send({
        errors: [{ message: 'Something went wrong' }]
    })
}