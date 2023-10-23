// import Da from "@/services/DbConnect";
import DatabaseConnect from "@/services/DatabaseConnect";
// import { getarticlesInMongo } from "@/services/articles"
import { cookies } from "next/headers";
import { NextResponse } from "next/server"


export const GET =async(request)=>{
    // console.log(request.cookies.get('jwt-token'),'--------------only-------------');
    const db = await DatabaseConnect();
    const articlesCollection = db.collection("Articles");
    const articles = await articlesCollection.find().toArray();

    return NextResponse.json(articles)
}

export const POST = async(request)=>{
   try {
    const body = await request.json()
    const db = await DbConnect();
    const articlesCollection = db.collection("Articles");
    const result = await articlesCollection.insertOne(body)
    console.log(result);
    return NextResponse.json({ added: true, message: 'add article' });
   } catch (error) {
    return NextResponse.json({ added: false, message: error.message })
   }
    
}