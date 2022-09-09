import React, { useState } from "react";

function EditEntryForm({targetJournalEntry, handleDataEdit}) {
    
    const url = "https://journal-app-server.herokuapp.com/";
    const[title, setTitle] = useState(targetJournalEntry?.title);
    const[body, setBody] = useState(targetJournalEntry?.body);
    
    function handleOnChange(event){
        if(event.target.name === "title"){
            setTitle(event.target.value);
        }
        else{
        setBody(event.target.value);
        }  
       
    }

    function handleOnSubmit(event){
        event.preventDefault();
        const editedData = {
            title: title,
            body: body,
            user_id: targetJournalEntry?.user_id
        } 
        fetch(`${url}/edit-entry/${targetJournalEntry.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedData)
        })
        .then(response=>response.json())
        .then(()=> handleDataEdit());
    }
    return (
    <div className="ui segment">
        <h2 className="editEntryText">EDIT {title.toUpperCase()}'s DETAILS</h2>
        <form className={"form"} onSubmit={handleOnSubmit}>
            <input type="text" name="title" placeholder="Title" value={title} onChange={handleOnChange}/>
            <textarea rows = "25" cols = "60" name = "body" value={body} onChange={handleOnChange}/>
            <button className="ui button" type="submit">
                Edit Entry
            </button>
        </form>
    </div>
    );
}

export default EditEntryForm;
