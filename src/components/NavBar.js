import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
   return (
    <div className={"navbar"}>
        <NavLink
            className={"link"}
            to={'all-journals'}
        >
            All Entries   
        </NavLink>

        <NavLink
            className={"link"}
            to={'new-journal-entry'}
        >
        Add Entry
        </NavLink>

    </div>
   );
}

export default NavBar;