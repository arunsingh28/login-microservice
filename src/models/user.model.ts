import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    findUser: (email: string, password: string) => Promise<IUser>;
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


UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    const user = this as IUser;
    if (!user.isModified("password")) return next();
    // hash password
    user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8));
    // pass to new task after hash
    return next();
})



export default mongoose.model<IUser>('User', UserSchema);