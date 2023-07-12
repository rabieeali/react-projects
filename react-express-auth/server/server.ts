import express from 'express'
import { Request, Response } from 'express';
import cors from 'cors'

require('dotenv').config()
const { PORT, TOKEN, EMAIL, PASSWORD, FIRST_NAME, LAST_NAME } = process.env
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.post('/auth', (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(403).json({ message: 'email and password are required' })
    if (email !== EMAIL || password !== PASSWORD) return res.status(403).json({ message: 'invalid email or password' });

    res.status(200).json({
        message: 'Logged in successfully',
        data: { first_name: FIRST_NAME, last_name: LAST_NAME, email: EMAIL, token: TOKEN },
    });
});



app.get('/re-auth', (req: Request, res: Response) => {
    const token = req.headers.authorization;

    if (!token) return res.status(403).json({ message: 'forbidden' })
    if (token !== TOKEN) return res.status(401).json({ message: 'unauthorized' })

    res.status(200).json({
        message: 're-authed successfully',
        data: { first_name: FIRST_NAME, last_name: LAST_NAME, email: EMAIL, token: TOKEN },
    });
});


app.listen(PORT, () => console.log(`Server Is Running On Port ${PORT}`))