import React, { useState } from "react";


// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");
function Form (){
  const [formData, setFormData] = useState({
    firstName:"john",
    lastName : "Henry",
    middleName: "jack",
    maidenName: 'Duper',
    admin: true,
   });

  function handleChange(event){
    const name =event.target.name
    let value = event.target.value;

  if (event.target.type === "checkbox") {
    value = event.target.checked;
    
  }
  setFormData({
    ...formData,
    [name]: value,
  })
    
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }
  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName:event.target.value,
    })
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    })

  }
  function handleMiddleNameChange (event){
    setFormData({
      ...formData,
      middleName:event.target.value
    })
  }
function handleMaidenNameChange (event){
  setFormData ({
    ...formData,
    maidenName: event.target.value
  })
}
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange}  value={formData.firstName} />
      <input type="text" onChange={handleLastNameChange}  value ={formData.lastName}/>
      <input type="text" onChange={handleMiddleNameChange} value={formData.middleName}/>
      <input type="text" onChange={handleMaidenNameChange} value ={formData.maidenName}/>
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
