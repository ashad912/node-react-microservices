import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)

export class Password {

    private static salt = randomBytes(8).toString('hex')

    static async toHash(password: string) {
        //const salt = randomBytes(8).toString('hex')
        const buf = (await scryptAsync(password, Password.salt, 64)) as Buffer;

        return `${buf.toString('hex')}`
        //return `${buf.toString('hex')}.${Password.salt}`
    }

    static async compare(storedPassword: string, suppliedPassword: string) {
        //const [hashedPassword, salt] = storedPassword.split('.')
        const buf = (await scryptAsync(suppliedPassword, Password.salt, 64)) as Buffer;

        return buf.toString('hex') === storedPassword

    }

}