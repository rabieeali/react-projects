import { login } from '@/api-services'
import { NextResponse } from 'next/server'


export const POST = async (req: Request) => {

    try {
        const credentials = await req.json()
        const { token } = await login(false, credentials)

        const res = new NextResponse("Successful Login");
        const tokenName = String(process.env.TOKEN_NAME)

        res.cookies.set({
            name: tokenName,
            value: token,
            maxAge: 60 * 60 * 24 * 30,
            sameSite: "strict",
            httpOnly: true,
            secure: true,
            path: "/",
        });
        return res;

    } catch (err: any) {
        return NextResponse.json({ message: err.message })
    }
}