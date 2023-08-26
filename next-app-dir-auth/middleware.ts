import { NextRequest, NextResponse } from "next/server";
const PUBLIC_FILE = /\.(.*)$/;

// not avaliable on edge so write here
const verifyToken = async (token: string) => {
    let isValid = true
    return isValid;
};

const middleware = async (req: NextRequest) => {
    const { pathname } = req.nextUrl

    // public routes

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/login") ||
        pathname === "/" ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    const token = req.cookies.get(String(process.env.TOKEN_NAME))

    if (!token) {
        req.nextUrl.pathname = '/login'
        return NextResponse.redirect(req.nextUrl)
    }

    try {
        await verifyToken(token.value)
        return NextResponse.next();
    } catch (err) {
        req.nextUrl.pathname = "/login";
        return NextResponse.redirect(req.nextUrl);
    }
}


export default middleware