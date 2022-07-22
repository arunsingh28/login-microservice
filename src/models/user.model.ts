import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    comparePassword(password:string) : Promise<boolean>;
    findUser: (email: string, password: string) => Promise<IUser>;
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

UserSchema.statics.findUser = async function (email: string, password: string) {
    const user = await this.findOne({ email })
    // if user not found
    if (!user) return null
    const isMatch = await bcrypt.compare(password, user.password)
    // if user password not match 
    if (!isMatch) return null
    return user
}
// just check password
UserSchema.methods.comparePassword = async function (userPassword: string) {
    const user = this as IUser;
    return bcrypt.compare(userPassword, user.password).catch((e) => false);
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

UserSchema.methods.comparePassword = async function (userPassword: string){
    const user = this as IUser;
    return bcrypt.compare(userPassword, user.password).catch(e => false)
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