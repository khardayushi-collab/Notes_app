import React, { useContext } from "react";
import imgUrl from "../assets/images/logo.jpeg";

import { TaskApi } from "../context/TaskContext";


const Navbar = () => {

    const {
        searchText,
        handleSearch
    } = useContext(TaskApi);


    return (
        <nav id="navBlock">

            {/* Logo */}
            <div className="imgBlock">

                <img
                    src={imgUrl}
                    alt="Notes App"
                />

            </div>


            {/* Title */}
            <div className="head">

                <h3>NOTES APP</h3>

                <p>
                    Organize your thoughts, anytime.
                </p>

            </div>


            {/* Search */}
            <div className="searchBox">

                <span className="searchIcon">
                    ⌕
                </span>

                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchText}
                    onChange={handleSearch}
                />

            </div>

        </nav>
    );
};


export default Navbar;