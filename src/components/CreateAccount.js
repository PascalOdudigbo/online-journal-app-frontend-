import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function CreateAccount(){
    const url = "https://journal-app-server.herokuapp.com/";
    const history = useNavigate();

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[recoveryQuestion, setRecoveryQuestion] = useState("");
    const[answer, setAnswer] = useState("");
    const[password, setPassword] = useState("");

    function handleOnChange(event){
        if(event.target.name === "username"){
            setUsername(event.target.value);
        }
        else if (event.target.name === "email"){
            setEmail(event.target.value);
        }
        else if (event.target.name === "recoveryQuestion"){
            setRecoveryQuestion(event.target.value);
        }
        else if (event.target.name === "recoveryQuestionAnswer"){
            setAnswer(event.target.value);
        }
        else{
            setPassword(event.target.value);
        }  
      }

    function handleCreateAccountAlert(responseData = {}){
        if(Object.values(responseData)[0] === "User already Exists"){
            alert("User email already exists, please Login!")
            history("/")   
        }
        else{
           alert("Account Created successfully!")
           history("/")   
        }
    }

    function handleCreateAccount(event){
        event.preventDefault()
        const newUser = {
            username: username,
            email: email,
            recovery_question: recoveryQuestion.toLowerCase(),
            answer: answer.toLowerCase(), 
            password: password
        }
        fetch(`${url}/create-account`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(responseData => handleCreateAccountAlert(responseData));
    }
    return (
        <div>
            <h2 className="createAccount">CREATE ACCOUNT</h2>
            <form className="form" onSubmit={handleCreateAccount}>
                <input type={"text"} name="username" placeholder="Username" value={username} required onChange={handleOnChange}/>
                <input type={"email"} name="email" placeholder="Email" value={email} required onChange={handleOnChange}/>
                <input type={"text"} name="recoveryQuestion" placeholder="Recovery Question" value={recoveryQuestion} required onChange={handleOnChange}/>
                <input type={"text"} name="recoveryQuestionAnswer" placeholder="Answer" value={answer} required onChange={handleOnChange}/>
                <input type={"password"} name="password" placeholder="Password" value={password} required onChange={handleOnChange}/>
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}

export default CreateAccount;