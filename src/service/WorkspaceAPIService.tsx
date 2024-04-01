import { Workspace } from "../models/Workspace";

const apiBase = "http://172.191.162.100:9002"

export function getWorkspace(workspace:Workspace){
    return fetch(apiBase+"/workspace",{
        method:"POST",
        mode:"cors",
        headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Header":"*",
            "Access-Control-Allow-Method":"GET, POST, PUT, OPTIONS, DELETE"
          },
        body:JSON.stringify(workspace)
    })
}