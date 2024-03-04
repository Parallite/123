import bcrypt from "bcrypt"
import prisma from '@/app/libs/prismadb'
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) return new NextResponse('Missing credentials', { status: 400 })

        const existUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (existUser) return new NextResponse('User already exist', { status: 400 })

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        });

        return NextResponse.json(user)

    } catch (err) {
        console.log(err, 'Registration error')
        return new NextResponse('Internal error', { status: 500 })
    }
}