import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {

    //const response = await fetch('https://openlibrary.org/search.json');
    const response = await fetch(`https://openlibrary.org/search.json?author=${author}}`);

    const data = await response.json()

    return Response.json({data});
}