import React, {
    Fragment,
    useContext
} from "react";

import { TaskApi }
    from "../context/TaskContext";


const TodoList = () => {

    const {
        multiNotes,
        selectedCategory,
        handleSelectedCategory,
        handleDelete,
        handleEdit,
        searchText
    } = useContext(TaskApi);


    /*
     * Your current context stores category like:
     *
     * {
     *    selected: "all"
     * }
     *
     */

    const selected =
        selectedCategory.selected;


    // ====================================
    // FILTER NOTES
    // ====================================

    const filteredNotes =
        multiNotes.filter((note) => {

            const categoryMatch =
                selected === "all" ||
                note.category === selected;


            const searchMatch =
                note.title
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    ) ||

                note.description
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


            return (
                categoryMatch &&
                searchMatch
            );

        });


    return (

        <main className="todoContainer">


            {/* =================================
                TOP HEADER
            ================================== */}

            <div className="notesHeader">

                <div>

                    <h2>
                        Your Notes
                    </h2>

                    <p>
                        View, edit and manage all your notes
                    </p>

                </div>


                {/* NOTE COUNT */}

                <div className="noteCount">

                    <div className="countIcon">
                        ▤
                    </div>

                    <div>

                        <span>
                            Total Notes
                        </span>

                        <strong>
                            {multiNotes.length}
                        </strong>

                    </div>

                </div>

            </div>


            {/* =================================
                CATEGORY FILTER
            ================================== */}

            <section className="categoryBlock">

                <span className="filterTitle">
                    Choose Category :
                </span>


                <label
                    className={
                        selected === "all"
                            ? "radioOption active"
                            : "radioOption"
                    }
                >

                    <input
                        type="radio"
                        name="selected"
                        value="all"
                        checked={
                            selected === "all"
                        }
                        onChange={
                            handleSelectedCategory
                        }
                    />

                    <span>
                        All
                    </span>

                </label>


                <label
                    className={
                        selected === "general"
                            ? "radioOption active general"
                            : "radioOption"
                    }
                >

                    <input
                        type="radio"
                        name="selected"
                        value="general"
                        checked={
                            selected === "general"
                        }
                        onChange={
                            handleSelectedCategory
                        }
                    />

                    <span>
                        General
                    </span>

                </label>


                <label
                    className={
                        selected === "official"
                            ? "radioOption active official"
                            : "radioOption"
                    }
                >

                    <input
                        type="radio"
                        name="selected"
                        value="official"
                        checked={
                            selected === "official"
                        }
                        onChange={
                            handleSelectedCategory
                        }
                    />

                    <span>
                        Official
                    </span>

                </label>


                <label
                    className={
                        selected === "technical"
                            ? "radioOption active technical"
                            : "radioOption"
                    }
                >

                    <input
                        type="radio"
                        name="selected"
                        value="technical"
                        checked={
                            selected === "technical"
                        }
                        onChange={
                            handleSelectedCategory
                        }
                    />

                    <span>
                        Technical
                    </span>

                </label>

            </section>


            {/* =================================
                NOTES
            ================================== */}

            <section className="notesBlock">

                {filteredNotes.length === 0 ? (

                    <div className="emptyState">

                        <div className="emptyIcon">
                            📝
                        </div>

                        <h3>
                            No notes found
                        </h3>

                        <p>
                            Create a new note or change your filter.
                        </p>

                    </div>

                ) : (

                    filteredNotes.map((val) => (

                        <Fragment key={val.id}>

                            <div
                                className={
                                    `notesCard ${val.category}`
                                }
                            >

                                {/* CARD HEADER */}

                                <div className="cardTop">

                                    <div className="cardTitle">

                                        <h4>
                                            Title: {val.title}
                                        </h4>

                                        <span
                                            className={
                                                `categoryBadge ${val.category}`
                                            }
                                        >
                                            ●&nbsp; {val.category}
                                        </span>

                                    </div>

                                </div>


                                {/* DESCRIPTION */}

                                <p className="noteDescription">

                                    {val.description}

                                </p>


                                {/* ACTIONS */}

                                <div className="actionBtn">

                                    <button
                                        className="edit"
                                        onClick={() =>
                                            handleEdit(val.id)
                                        }
                                    >
                                        ✎&nbsp; Edit
                                    </button>


                                    <button
                                        className="delete"
                                        onClick={() =>
                                            handleDelete(val.id)
                                        }
                                    >
                                        ▢&nbsp; Delete
                                    </button>

                                </div>

                            </div>

                        </Fragment>

                    ))

                )}

            </section>

        </main>

    );
};


export default TodoList;