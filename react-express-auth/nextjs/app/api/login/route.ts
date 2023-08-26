import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'


export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json()
    const url = 'http://localhost:4500/auth'
    const cookieName = 'my-secret-cookie'

    try {
        const response = await axios.post(url, { email: body.email, password: body.password })
        const result = await response.data
        const { first_name, last_name, email, token } = result
        console.log(result)

        // res.cookies.set({
        //     name: cookieName,
        //     value: token,
        //     httpOnly: true,
        //     path: '/',
        //     secure: process.env.NODE_ENV !== 'development',
        //     expires: 24 * 60 * 60 * 1000
        // })

        return NextResponse.json({})
    } catch (err: any) {
        console.log(err)
        // return new Response(err , {
        //     status:401
        // })
    }
}