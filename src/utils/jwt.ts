import jwt from 'jsonwebtoken'
import { key } from '../../config/keys'


export async function getToken(id: string) {
    return jwt.sign({ id }, key.JWT.SECRET, {
        expiresIn: key.JWT.EXPIRES
    })
}