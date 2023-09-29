import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";




// ----------- Get specific users ---------
export async function GET(request:NextRequest , {params} : {params : {id:string}} ){
    console.log('hello')
    const user = await prisma.user.findUnique({
        where : {id : parseInt(params.id)}
    })
    if(!user){
        return NextResponse.json({error:'user not found'},{status:404})
    }
    return NextResponse.json(user)
}



// ---------- User update-------------

export async function PUT(request:NextRequest,{params}:{params:{id:string}}){
    const body = await request.json()
    console.log('hello')
    const user = await prisma.user.findUnique({
        where : {id : parseInt(params.id)}
    })
    if(!user){
        return NextResponse.json({"message":"User not found"},{status:404})
    }
    const result = await prisma.user.update({
        where : { id : parseInt(params.id)},
        data : {
            name : body.name,
            email : body.email
        }
    })

    return NextResponse.json(result)

}