import { Express, Request, Response } from 'express'
import path from 'path'

export function router(router: Express) {
    // show baisc login page
    router.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../template/login.html'));
    })
    router.get('/create', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../template/signup.html'));
    })
    router.get('/mini',(req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../template/mini.html'));
    })
}