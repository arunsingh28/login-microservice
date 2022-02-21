import { Express, Request, Response } from 'express'


export function apiRouter(router: Express) {
    router.post('/login', (req: Request, res: Response) => {
        console.log('Data from front end:',req.body)
    })

    router.post('/register',(req: Request, res: Response)=>{
        console.log('Data from front end:',req.body)
    })
}