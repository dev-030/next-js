import prisma from "@/prisma/client";
import { removeRequestMeta } from "next/dist/server/request-meta";
import { NextRequest, NextResponse } from "next/server";



// ----------- Get all users ---------

export async function GET(request:NextRequest) {

    const users = await prisma.user.findMany();
    return NextResponse.json(users)
}



// ----------- Create New user--------

export async function POST(request:NextRequest){

    const body = await request.json()

    const user = await prisma.user.findUnique({
        where : {email : body.email}
    })

    if(user){
        return NextResponse.json({message : "user already exists"},{status:400})
    }

    const result = await prisma.user.create({
        data : {
            name  : body.name ,
            email : body.email
        }
    })
    return NextResponse.json(result)
}


// -------- Delete user--------

export async function DELETE(request:NextRequest) {

    const body = await request.json()

    const result = await prisma.user.findUnique({
        where : {email : body.email}
    })

    if(!result){
        return NextResponse.json({"message" : 'user not found'},{status:404})
    }

    const user = await prisma.user.delete({
        where : {email : body.email}
    })

    return NextResponse.json(user)
    
}