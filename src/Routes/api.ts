import { Express, Request, Response } from 'express'


export function apiRouter(router: Express) {
    router.post('/login', (req: Request, res: Response) => {
        const {email,password} = req.body
        if(email === '' || password === ''){
            return res.status(400).send({message: 'Please fill all fields'})
        }else{
            return res.status(200).send({message: 'Login Success'})
        }
    })

    router.post('/register',(req: Request, res: Response)=>{
        console.log('Data from front end:',req.body)
    })
}