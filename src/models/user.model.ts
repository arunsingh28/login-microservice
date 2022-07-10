import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    findUserPassword: (email: string, password: string) => boolean;
    findUserById: (id: string, password: string) => Promise<IUser>;
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
})

UserSchema.statics.findUserPassword = async function (email: string, password: string) {
    const user = await this.findOne({ email })
    // if user not found
    if (!user) return false
    const isMatch = await bcrypt.compare(password, user.password)
    // if user password not match 
    if (!isMatch) return false
    return true
}

UserSchema.statics.findUserById = async function (id: string, password: string) {
    const user = await this.findOne({ _id: id })
    if (!user) return null
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return null
    // check return policy 
    return {
        name: user.name,
        email: user.email,
    }
}

UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    const user = this as IUser;
    if (!user.isModified("password")) return next();
    // hash password
    user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8));
    // pass to new task after hash
    return next();
})



export default mongoose.model<IUser>('User', UserSchema);