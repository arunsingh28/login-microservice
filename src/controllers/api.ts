import { Express, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import _user, { IUser } from '../models/user.model'

export function apiRouter(router: Express) {
    router.post('/login', async (req: Request, res: Response) => {
        const { email, password } = req.body
        if (email === '' || password === '') {
            return res.status(400).json({ message: 'Please fill all fields' })
        } else {
            const isUser = await (<IUser><unknown>_user).findUser(email, password);
            if (!isUser) {
                return res.status(400).json({ message: 'Invalid email or password' })
            }
            return res.status(200).json({ message: 'Login Success' })
        }
    })

    router.post('/register', async (req: Request, res: Response) => {
        const { email, name, password } = req.body
        if (email === '' || name === '' || password === '') {
            return res.status(400).send({ message: 'Please fill all fields' })
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