import jwt from 'jsonwebtoken'

export async function getToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' })
}