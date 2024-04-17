import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";

// export const revalidate = 0;
export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    const supabase = createServerClient();
    const {user, password} = body;


    const usuarioEncontrado = await supabase
    .from('user').select('*')
    .filter('username', 'eq', user)
    .filter('password', 'eq', password)
    .limit(1).single();

    // console.log("usuario de supabase", usuarioEncontrado);
    
    if( usuarioEncontrado.data !== null){
        return Response.json({message: 'Bienvenido'})
    }else{
        return Response.json({message: "User o pass incorrecto"}, {
            status: 401
        });
    }
};