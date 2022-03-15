import jwt from 'jsonwebtoken'
import { key } from '../../config/keys'


export interface Itoken {
    id: string
    iat: number
    exp: number
}

export async function getToken(id: string) {
    return jwt.sign({ id }, key.JWT.SECRET, {
        expiresIn: key.JWT.EXPIRES
    })
}

export async function refreshToken(oldToken: string) {
    return jwt.sign({ id: oldToken }, key.JWT.SECRET, {
        expiresIn: key.JWT.REFRESH_EXPIRES
    })
}

export async function verifyToken(token: string) {
    return jwt.verify(token, key.JWT.SECRET, (err, decoded: Itoken) => {
        if (err) {
            return false;
        }
        return decoded.id
    })
}