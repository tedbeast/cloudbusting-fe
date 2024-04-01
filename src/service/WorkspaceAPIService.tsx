import { Workspace } from "../models/Workspace";

const apiBase = "http://localhost:9002/"

export function getWorkspace(workspace:Workspace){
    return fetch(apiBase+"/workspace",{
        method:"POST",
        mode:"same-origin",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
        body:JSON.stringify(workspace)
    })
}