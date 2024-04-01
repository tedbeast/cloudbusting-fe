import React, { SyntheticEvent, useState } from "react";
import { Workspace } from "../models/Workspace";
import { getWorkspace } from "../service/WorkspaceAPIService";

export function OpenWorkspaceMenu(){
    const [userId, setUserId] = useState<number>(0);
    const [lab, setLab] = useState<string>("");
    function updateUserIdState(event:SyntheticEvent){
        let box = event.target as HTMLInputElement;
        setUserId(parseInt(box.value))
    }
    function updateLabState(event:SyntheticEvent){
        let box = event.target as HTMLInputElement;
        setLab(box.value);
    }
    function goButtonHandler(){
        let workspace : Workspace = {
            userId:userId,
            lab:lab
        }
        getWorkspace(workspace)
        .then(result => {return result.json()})
        .then(json => {console.log(json);  window.open(json.url)});
    }
    return (<>
        <p>user id</p>
        <input onChange={updateUserIdState} value={userId}></input>
        <p>lab to be opened</p>
        <input onChange={updateLabState} value={lab}></input>
        <button onClick={goButtonHandler}>let's go!</button>
    </>)
}