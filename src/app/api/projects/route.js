// import Da from "@/services/DbConnect";
import DatabaseConnect from "@/services/DatabaseConnect";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"


export const GET =async(request)=>{
    // console.log(request.cookies.get('jwt-token'),'--------------only-------------');
    const db = await DatabaseConnect();
    const projectsCollection = db.collection("Projects");
    const projects = await projectsCollection.find().toArray();

    return NextResponse.json(projects)
}

export const POST = async(request)=>{
   try {
    const body = await request.json()
    const db = await DatabaseConnect();
    const projectsCollection = db.collection("Projects");
    const result = await projectsCollection.insertOne(body)
    console.log(result);
    return NextResponse.json({ added: true, message: 'add project' });
   } catch (error) {
    return NextResponse.json({ added: false, message: error.message })
   }
    
}
export const DELETE = async(request, {params})=>{
    try {
       const id = request.nextUrl.searchParams.get('id')
       const query = { _id: ObjectId(params.id) }
      console.log(id);
    // const db = await DatabaseConnect();
    // const projectsCollection = db.collection("Projects");
    // const result = await projectsCollection.deleteOne(id)
    // console.log(result);
    return NextResponse.json({ added: true, message: 'delete project' });
   } catch (error) {
    return NextResponse.json({ added: false, message: error.message })
   }
    
}