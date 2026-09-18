import React, { Fragment, useContext } from 'react'
import { TaskApi } from "../context/TaskContext"

const TodoList = () => {

  //?step3 : context consumer
  //? syntex- const value_provider= useContext(ContextApi)

  const value= useContext(TaskApi)
  console.log(value)
  const {selectedCategory: {selected}, handleSelectedCategory,multiNotes,handleDelete,handleEdit} = value

  return (
    <>
        <main className="todoContainer">
           <section value= {selected} onChange={handleSelectedCategory} className="categoryBlock">
               <label htmlFor="">Choose Category :</label>
               <input type="radio" name="selected" value="all" />All
               <input type="radio" name="selected" value="general" />General
               <input type="radio" name="selected" value="official" />Official
               <input type="radio" name="selected" value="technical" />Technical
           </section>

           {/* //? iterate over 2nd state */}
          <section className="notesBlock">
            {multiNotes.length===0?"Loading...":multiNotes.map((val)=>{
              console.log("current val", val)
              return selected==="all"?(
                <Fragment key={val.id}>
                    <div className="notesCard">
                      <h4>Title: {val.title}</h4>
                      <h5>Category: {val.category}</h5>
                      <p>{val.description}</p>
                      <div className="actionBtn">
                        <button onClick={()=>{handleEdit(val.id)}} className="edit">Edit</button>
                        <button onClick={()=>{handleDelete(val.id)}} className="delete">DELETE</button>
                      </div>
                    </div>
                </Fragment>
              ):(selected===val.category && (
                <Fragment key={val.id}>
                  <div className="notesCard"> 
                    <h4>Title: {val.title}</h4>
                    <h5>Category: {val.category}</h5>
                    <p>{val.description}</p>
                    <div className="actionBtn">
                      <button onClick={()=>{handleEdit(val.id)}} className="edit">Edit</button>
                      <button onClick={()=>{handleDelete(val.id)}} className="delete">Delete</button>
                    </div>
                  </div>
                </Fragment>
              ))
            })}
          </section>
        </main>
    </>
  )
}

export default TodoList