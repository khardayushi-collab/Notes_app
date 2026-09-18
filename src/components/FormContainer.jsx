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
          <div>
            <h1>Take notes below</h1>
          </div>
          <div>
            <label htmlFor={formId + "title"}>Title : </label>
            <input 
              type="text" 
              id={formId + "title"} 
              name="title" 
              value={title} 
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor={formId + "desc"}>Description : </label>
            <textarea
              id={formId + "desc"}
              cols={30}
              rows={10}
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
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
            <button>SUBMIT</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormContainer;
