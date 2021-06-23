import mongoose from 'mongoose'


// props required to create a new User
interface UserAttrs {
    email: string;
    password: string;
}

// props that a User Document has

interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    createdAt: string;
}

// props that a User model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.build = function (attrs: UserAttrs) {
    return new User(attrs)
}

export const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// const user = User.build({
//     email: 'test@test.com',
//     password: 'password'
// })

// console.log(user.email)
// console.log(user.password)
// console.log(user.createdAt)