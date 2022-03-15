import { Express, Request, Response } from 'express'
import _user, { IUser } from '../models/user.model'
import { getToken, verifyToken } from '../utils/jwt'


export function apiRouter(router: Express) {
    router.post('/e/challenge/v1/verify/?', async (req: Request, res: Response) => {
        const { email } = req.body
        const { e: mail, url } = req.query
        if (email === '' || mail === '' || email === undefined || mail === undefined || email === null || mail === null) {
            return res.status(400).send({ message: 'Please fill all fields' })
        }
        if (mail === email) {
            const isUser = await _user.findOne({ email })
            console.log(isUser)
            if (isUser) {
                const token = await getToken(isUser._id)
                res.json({ authState: 1, token })
            } else {
                res.status(404).send('User not found')
            }
        } else {
            return res.json({ message: 'Data parser error', state: 1, errorCode: 'ERR_DATA_PARSER', callbackUrl: url })
        }
    })
    interface Itoken {
        id: string
        iat: number
        exp: number
    }
    router.post('/p/challenge/v2/verify/?', async (req: Request, res: Response) => {
        const { password } = req.body;
        const { p: passWord, url, token } = req.query as any;
        if (password === '' || passWord === '' || password === undefined || passWord === undefined || password === null || passWord === null) {
            return res.status(400).send({ message: 'Please fill all fields' })
        } else {
            const tokenData = await verifyToken(token)
            console.log(tokenData.id)
        }
    })


    router.post('/register', async (req: Request, res: Response) => {
        const { email, name, password } = req.body
        if (email === '' || name === '' || password === '' || email === undefined || name === undefined || password === undefined || email === null || name === null || password === null) {
            return res.status(400).send({ message: 'Please fill all fields' })
        }
        if (password?.length < 6) {
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

