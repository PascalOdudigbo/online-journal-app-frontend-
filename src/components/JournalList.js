import React from "react";
import Journal from "./Journal"
import Search from "./Search";
import {Link} from "react-router-dom";

function JournalList({allJournals, setCurrentItem, handleFilteredData, handleDelete}){
        return(
        <>
            <div className="jContainer">
                <Search allJournals={allJournals} handleSearchData={handleFilteredData} />
                <h4>ALL JOURNAL ENTRIES</h4>
            </div>

            <div className="myJournals">
            {
                allJournals?.map((journal)=> <Journal
                    key={journal.id} 
                    title={journal.title}
                    body={journal.body}
                    createdAt={journal.created_at.slice(0, 10)}
                    updatedAt={journal.updated_at.slice(0, 10)}
                    editlink= {<Link className={"editLink"} to={'/home/edit-journal-entry'}  onClick={()=>setCurrentItem(journal)}>Edit</Link>}
                    deletelink={<button className={"deleteButton"} onClick={()=>{handleDelete(journal.id)}}>Delete</button>}
                    />
                )
            }
            </div>
        </>
        )
}

export default JournalList