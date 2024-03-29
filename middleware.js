import React from 'react';
import {NextResponse} from "next/server";

export default function middleware(req) {
    const verify = req.cookies.get("loggedin");
    let url = req.url

    if(!verify && url.includes("admin/post")) {
        return NextResponse.redirect("http://localhost:3000/");
    }
    if(verify && url === ("http://localhost:3000/")) {
        return NextResponse.redirect("http://localhost:3000/admin/post");
    }
}