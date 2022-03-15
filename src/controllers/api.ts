import { Express, Request, Response } from 'express'
import _user, { IUser } from '../models/user.model'
import { getToken } from '../utils/jwt'


export function apiRouter(router: Express) {
    router.post('/e/challenge/v1/verify', async (req: Request, res: Response) => {
        const { email } = req.body
        const { e: mail } = req.query
        if (mail === email) {
            const user = await _user.findOne({ email })
            if (user) {
                const token = getToken(user._id)
                res.json({ message: 'Login Success', auth: true, token })
            } else {
                res.status(404).send('User not found')
            }
        }
    })

    router.post('/register', async (req: Request, res: Response) => {
        const { email, name, password } = req.body
        if (email === '' || name === '' || password === '') {
            return res.status(400).send({ message: 'Please fill all fields' })
        }
        if (password.length < 6) {
            return res.status(400).send({ message: 'Please enter 6 charcter' })
        }
        const isUser = await (<IUser><unknown>_user).findUser(email, password);
        if (isUser) {
            return res.status(400).json({ message: 'User already exists' })
        } else {
            const newUser = new _user({
                name,
                email,
                password
            })
            await newUser.save()
            return res.status(200).json({ message: 'User created' })
        }
    })
}

