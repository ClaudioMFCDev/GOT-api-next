import { NextRequest, NextResponse } from "next/server";
import users from "./users.json"

export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    const {user, password} = body;

    const login = users.usuarios.find(element =>  element.user === user && element.password === password)
    
    if(login){
        return Response.json({message: "Bienvenido"})
    }else{
        return Response.json({message: "User o pass incorrecto"})
    }
} 