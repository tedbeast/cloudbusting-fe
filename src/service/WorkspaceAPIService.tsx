import { Workspace } from "../models/Workspace";

const apiBase = "http://172.191.162.100:9002/"

export function getWorkspace(workspace:Workspace){
    return fetch(apiBase+"/workspace",{
        method:"POST",
        mode:"cors",
        headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
        body:JSON.stringify(workspace)
    })
}