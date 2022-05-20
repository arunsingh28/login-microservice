import { Express, Request, Response } from 'express'
import _user, { IUser } from '../models/user.model'
import { getToken, verifyToken } from '../utils/jwt'


/**
 * @state in Authrization 
 * 1 = unsuccessfull
 * 0= successfull  
 */

export function apiRouter(router: Express) {
    router.get('/e', async (req: Request, res: Response) => {
        // const { email } = req.body
        let email = 'arunsingh28aug.as@gmail.com'
        let url = 'http://localhost:3000/e/'
        let mail = 'arunsingh28aug.as@gmail.com'
        // const { e: mail, url } = req.query
        console.log('Email body:', email, 'Email Query', mail, 'URL',url)
        if (email === '' || mail === '' || email === undefined || mail === undefined || email === null || mail === null) {
            return res.status(400).json({ message: 'Please fill all fields', fallBackUrl: url })
        }
        if (url === undefined || url === '' || url === null) {
            return res.status(400).json({ message: 'Fallback url not found', fallBackUrl: 'https://arunsingh28.me' })
        }
        if (mail === email) {
            const isUser = await _user.findOne({ email })
            console.log(isUser)
            if (isUser) {
                const jwtToken = await getToken(isUser._id)
                return res.status(200).json({ authState: 1, token: jwtToken })
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        } else {
            return res.status(201).json({ message: 'Somethig wrong with user input data', state: 1, errorCode: 'ERR_DATA_PARSER', fallBackUrl: url })
        }
    })

    router.post('/p/challenge/v2/verify/?', async (req: Request, res: Response) => {
        const { password } = req.body;
        const { url, token } = req.query as any;
        console.log('Password', password, 'url', url, 'token', token)
        if (password === '' || password === undefined || password === null) {
            return res.status(400).json({ message: 'Please fill all fields' })
        } else {
            const userId = await verifyToken(token);
            if (<any>userId) {
                const isUser = await (<IUser><unknown>_user).findUserById(<any>userId, password)
                if (isUser) {
                    return res.status(200).json({
                        authState: 0, callbackUrl: url, data: [
                            // return allowed data
                            isUser
                        ]
                    })
                } else {
                    res.status(404).json({ message: 'incorrect password', authState: 1, errorCode: 'ERR_INCORRECT_PASSWORD', fallBackUrl: url })
                }
            } else {
                return res.status(401).send({ message: 'Tempered token' })
            }
        }
    })
    // update this API
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

