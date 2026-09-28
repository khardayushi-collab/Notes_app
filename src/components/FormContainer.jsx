import React, { useId, useContext } from "react";
import { TaskApi } from "../context/TaskContext";

const FormContainer = () => {
  //step3: context consumer
  const data = useContext(TaskApi);
  console.log(data);
  const {
    formData: { title, description, category },
    handleChange,
    handleSubmit,
  } = data;



  const formId = useId();

  return (
    <>
      <section className="formBlock">
        <form onSubmit={handleSubmit}>
          <div className="formHeader">

                    <div className="formIcon">
                        ✎
                    </div>
                    <div>
                        <h1>
                            Take Notes
                        </h1>
                        <p>
                            Capture your ideas, tasks and thoughts
                        </p>
                    </div>
                </div>
          <div className="formGroup">
            <label htmlFor={formId + "-title"}>Title : </label>
            <input 
              type="text" 
              id={formId + "-title"} 
              placeholder="Enter note title..."
              name="title" 
              value={title} 
              onChange={handleChange}/>
          </div>
          <div className="formGroup">
            <label htmlFor={formId + "desc"}>Description : </label>
            <textarea
              id={formId + "desc"}
              cols={30}
              rows={10}
              name="description"
              placeholder="Write your note here..."
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor={formId + "cat"}>Category : </label>
            <select name="category" value={category} id={formId + "cat"} onChange={handleChange}>
              <option value="" disabled>
                --select--
              </option>
              <option value="general">general</option>
              <option value="official">official</option>
              <option value="technical">technical</option>
            </select>
          </div>
          <div className="btnBlock">
            <button type="submit">
               <span> + </span> Add Note
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormContainer;
