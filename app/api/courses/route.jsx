import courses from "./data.json"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid';
 //install uuid to get unique ID when a course is created.
 
export async function GET(request){
    return NextResponse.json(courses)
}

export async function POST(request){
    const {title,description,link,level} = await request.json()
    const newCourse = {
        id:uuidv4(),
        title:title,
        desc:description,
        link:link,
        level:level
    }
    return NextResponse.json(newCourse)
} 