import { NextResponse } from "next/server";


const POST = async (request) => {
    const res = new NextResponse(
        JSON.stringify({
            message: 'Logout success'
        })
    );

    res.cookies.set('jwt-token', "", {
        expires: new Date(Date.now())
    });
    return res;
}