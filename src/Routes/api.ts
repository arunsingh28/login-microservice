import { Express, Request, Response } from 'express'


export function router(router: Express) {
    router.post('/login', (req: Request, res: Response) => {
        console.log('Data from front end:',req.body)
    })
}