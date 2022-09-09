import React, { useState } from "react";

let userData = JSON.parse(localStorage.getItem("userData"));
function AddEntryForm({handleAddEntry}) {

  const url = "https://journal-app-server.herokuapp.com/";
  const[title, setTitle] = useState("");
  const[body, setBody] = useState("");

  function handleOnChange(event){
    if(event.target.name === "title"){
      setTitle(event.target.value);
    }
    else{
      setBody(event.target.value);
    }  
  }

  function handleOnSubmit(event){
    const newAddress = {
      title: title,
      body: body,
      user_id: userData.id
    }
    event.preventDefault();
    fetch(`${url}/add-entry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newAddress)
    })
    .then(response => response.json())
    .then(newEntryData => handleAddEntry(newEntryData));
  }

  return (
    <div className="ui segment">
      <h2 className="addEntryText">ADD JOURNAL ENTRY</h2>
        <form className={"form"} onSubmit={handleOnSubmit}>
            <input type="text" name="title" placeholder="Title" value={title} onChange={handleOnChange}/>
            <textarea rows = "25" cols = "60" name = "body" value={body} onChange={handleOnChange}/>
            <button className="ui button" type="submit">Add Entry</button>
        </form>
    </div>
  );
}

export default AddEntryForm;
