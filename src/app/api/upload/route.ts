import { writeFile } from "fs/promises";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {

    const data=await req.formData();
    const file=data.get('file');
    if(!file){
        return NextResponse.json({"Message":"No Image found",sucess:false})

    }
    const byteData=await file.arrayBuffer()  // get the bytes of the file
    const buffer=Buffer.from(byteData);       // convert to a Buffer
    const path=`./public/${file.name}`
    await writeFile(path,buffer);
    return NextResponse.json({"message":"file uploaded",sucess:true})
    


    
}
