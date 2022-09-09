import React from "react";
//import {Link} from "react-router-dom";

function Journal({title, body, createdAt, updatedAt, editlink, deletelink}){
    return (
        <div className="entryWrapper">
            <div className="timestampWrapper">
                <p>Created At: {createdAt}</p>
                <p>Last Update: {updatedAt}</p>
            </div>
            <div className="titleWrapper"><h2>{title}</h2></div>
            <div className="bodyWrapper"><p>{body}</p></div>
            <div className="timestampWrapper">
                {editlink}
                {deletelink}
            </div>
        </div>
    );

}
export default Journal;