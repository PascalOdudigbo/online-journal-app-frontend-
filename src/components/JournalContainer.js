import React, {useEffect, useState} from "react";
import { useNavigate, Link, Routes, Route} from "react-router-dom";
import AddEntryForm from "./AddEntryForm";
import EditEntryForm from "./EditEntryForm";
import JournalList from "./JournalList";
import NavBar from "./NavBar";


let userData = JSON.parse(localStorage.getItem("userData"));
const loginStatus = localStorage.getItem("loginStatus");

function JournalContainer(){
    const url = "https://journal-app-server.herokuapp.com/";
    const history = useNavigate();
    const[allJournals, setAllJournals] = useState([]);
    const [currentItem, setCurrentItem] = useState({});


    function handleFilteredData(searchData){
        if(searchData === ""){
            fetch(`${url}/journal-list/${userData.id}`)
            .then(response => response.json())
            .then(journals => setAllJournals(journals))
            .catch((err) => {
                console.log(err);
            })
        }else{
            const filteredJournals = allJournals?.filter((journal)=> journal?.title.toLowerCase().includes(searchData?.toLowerCase()));
            setAllJournals(filteredJournals);
        }
        
    }

    function handleAddEntry(newEntryData){
        setAllJournals([...allJournals, newEntryData]);
        history("all-journals");
    }

    function handleEntryDelete(id){
        fetch(`${url}/delete-entry/${id}`, {
            method: "DELETE"
        })
        const filteredJournals = allJournals?.filter((journal)=> journal?.id !== id);
        setAllJournals(filteredJournals);
    }
    
    function handleEditEntry(){
        fetch(`${url}/journal-list/${userData.id}`)
        .then(response => response.json())
        .then(journals => setAllJournals(journals))
        .catch((err) => {
            console.log(err);
        })
        history("/home/all-journals")

    }


    useEffect((history = useNavigate)=>{
        if(loginStatus === "true"){
            userData = JSON.parse(localStorage.getItem("userData"));
            fetch(`${url}/journal-list/${userData.id}`)
            .then(response => response.json())
            .then(journals => setAllJournals(journals))
            .catch((err) => {
                console.log(err);
            })
        }
        else{
            history("/");
        }
    }, [])

        return(
            <div>
                <NavBar/>
                <div className= "logoutContainer">
                    <h2 className="welcome">WELCOME {userData?.username.toUpperCase()}</h2>
                    <Link className={"logout"} to={'/'} onClick={()=>{
                        localStorage.clear()
                        history("/")
                    }}>logout</Link>
                </div>
                <Routes>
                    <Route path="/all-journals" element={<JournalList allJournals={allJournals} setCurrentItem={setCurrentItem} handleFilteredData={handleFilteredData} handleDelete={handleEntryDelete}/>}/>
                    <Route path="/new-journal-entry" element={<AddEntryForm handleAddEntry={handleAddEntry}/>}/>
                    <Route path="/edit-journal-entry" element={<EditEntryForm targetJournalEntry={currentItem} handleDataEdit={handleEditEntry}/>}/>

                </Routes>
                
            </div>
        )
}

export default JournalContainer;