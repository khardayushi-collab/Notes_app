import React ,{createContext, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


//? step1: create a context
// TaskApi--> ContextApi

export const TaskApi= createContext()

const TaskContext = (props) => {

    //? to store data from the form
    const [formData, setFormData]= useState({
        title:"",
        description: "",
        category: "",
        id:uuidv4()
    })

    
    //! to get the datafrom local storage
     const getApi=()=>{
          const data= localStorage.getItem("items")
          if(data){
               return JSON.parse(data)
          }else 
               return []
     }

    //? to store "multi set of notes"
    const [multiNotes, setMultiNotes]= useState(getApi())


    //! pass and store in local storage
    useEffect(()=>{
     localStorage.setItem("items", JSON.stringify(multiNotes))
    },[multiNotes])

    //? to store selected Category
    const [selectedCategory, setSelectedCategory]= useState({
     selected: "all"
    })

    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
    setSearchText(e.target.value);
};

    //? to detect the change in choosen category
    const handleSelectedCategory=(e)=>{
     const {name, value}= e.target
     setSelectedCategory({[name]: value})
    }

    //? to detect change from the form
    const handleChange= (e)=>{
         const {name, value}= e.target
         setFormData({...formData,[name]:value})
    }

    //? to detect submission of form
    const handleSubmit= (e)=>{
         e.preventDefault()

         //? convert input field empty after submit
         setFormData({
            title:"",
            description:"",
            category:"",
            id: uuidv4()
         })

         setMultiNotes([...multiNotes, formData])
    }

    //? delete the notes---------
    const handleDelete= (delId)=>{
     console.log("id of data to be deleted is-:", delId)
     const remainingVal= multiNotes.filter((val)=>{
          return val.id !== delId

     })
     setMultiNotes(remainingVal)
     console.log("remaining val", remainingVal)
    }

    //? edit notes-----------------------
    const handleEdit= (editId)=>{
     console.log("id of data to edit", editId)

     // finding particular item to edit
     const findVal= multiNotes.find((val)=>{
          return val.id=== editId
     })

     //collection and displaying
     const remainingVal= multiNotes.filter((val)=>{
          //console.log("curreny val",val)
          return val.id !== editId
     })

     setFormData(findVal) //to bring val in input
     setMultiNotes(remainingVal)//apart from items to edit display all remaining val back
     console.log("Find value",findVal)
     console.log("remaining values", remainingVal)
    }

    //? step2: COntext provider- wrap the consumer by context provider

  return (
   <TaskApi.Provider value={{formData,
                             handleChange,
                              handleSubmit,
                              selectedCategory, 
                              handleSelectedCategory,
                              multiNotes,
                              handleDelete,
                              handleEdit,
                              searchText,
                              handleSearch}}>
    {props.children}
   </TaskApi.Provider>
  )
}

export default TaskContext