import React,{useState} from "react";
import {Routes, Route, useNavigate} from "react-router-dom"

let userData = {}

function ForgotPassword(){
    const url = "https://journal-app-server.herokuapp.com/";
    const history = useNavigate()
    const[email, setEmail] = useState("");
    const[answer, setAnswer] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    
   
    function handleOnChange(event){
        if (event.target.name === "email"){
            setEmail(event.target.value);
        }
        else if (event.target.name === "recoveryQuestionAnswer"){
            setAnswer(event.target.value);
        }
        else if (event.target.name=== "password"){
            setPassword(event.target.value);
        } 
        else {
            setConfirmPassword(event.target.value)
        }
      }

      function handleForgotPassword(event){
        const loginData = {
            email: email,
        }

        event.preventDefault()
        fetch(`${url}/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if(Object.values(data)[0] === "This email isn't connected to any user account!"){
                alert("This email isn't connected to any user account!");
            }
            else{
                localStorage.setItem("userData", JSON.stringify(data));
                userData = JSON.parse(localStorage.getItem("userData"))
                //console.log(userData.recovery_question)
                history("/forgot-password/2")
            }  
        });
      }

    return(
        <div>
            <h2 className="forgotPassword">FORGOT PASSWORD</h2>
            <Routes>

            <Route path='/1' element ={
                <div>
                    <form className="form" onSubmit={handleForgotPassword}>
                        <input type={"email"} name="email" placeholder="Email" value={email} required onChange={handleOnChange}/>
                        <button type="submit">Next</button> 
                    </form>
                    <div className="steps"><p>Step 1 of 3</p></div>
                </div>}/>

            <Route path='/2' element ={
            <div>
                <form className="form" onSubmit={(e)=>{
                    e.preventDefault()                    
                    if(userData.answer.toLowerCase() === answer.toLowerCase()){
                        history("/forgot-password/3")
                    }
                    else{
                        alert("wrong answer to recovery question!")
                    }
                }}>
                <input type={"text"} name="recoveryQuestion" placeholder="Recovery Question" value={`${userData.recovery_question}?`} readOnly onChange={handleOnChange}/>
                <input type={"text"} name="recoveryQuestionAnswer" placeholder="Answer" value={answer} required onChange={handleOnChange}/>               
                <button type="submit">Next</button> 
                </form>
                <div className="steps"><p>Step 2 of 3</p></div>
            </div>}/>

            <Route path='/3' element ={
            <div>
                <form className="form" onSubmit={(e)=>{
                    e.preventDefault()
                    if(password === confirmPassword){
                        const updateData = {
                            password: confirmPassword
                        };

                        fetch(`${url}/update-password/${userData.id}`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            }, 
                            body: JSON.stringify(updateData)
                        })
                        .then(response => response.json())
                        .then(responseData => {
                            console.log(responseData);
                            history("/");
                        });
                    }
                    else{
                        alert("Passwords don't match!")
                    }
                }}>
                <input type={"password"} name="password" placeholder="New Password" value={password} required onChange={handleOnChange}/>
                <input type={"password"} name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} required onChange={handleOnChange}/>               
                <button type="submit">Next</button> 
                </form>
                <div className="steps"><p>Step 3 of 3</p></div>
            </div>}/>

            </Routes>

        </div>
    );
}

export default ForgotPassword;