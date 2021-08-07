import React, { useState } from "react";
import Sidebar from "./../Sidebar/Sidebar";

const AddDoctor = () => {

const [info,setInfo]=useState({});
const [file,setFile]=useState(null);
const handleBlur=(e)=>{
    const newInfo={...info};
    newInfo[e.target.name]=e.target.value;
    setInfo(newInfo)
}
const handleFileChange=(e)=>{
    const newFile=e.target.files[0]
setFile(newFile)
}
const handleSubmit=()=> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('email', info.email)
  
    fetch('http://localhost:5000/addADoctor', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}

  return (
   <section className="row">
       <div className="col-md-2">
           <Sidebar></Sidebar>
       </div>
       <div className="col-md-8 mt-5 ms-2">
       <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onBlur={handleBlur} type="email" name='email' class="form-control" placeholder="Enter email"/> 
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input  onBlur={handleBlur}  type="text" name='name' class="form-control" placeholder="name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Upload File</label>
    <input onChange={handleFileChange} type="file" name='file' class="form-control" placeholder="upload a file"/>
  </div>
  
  <button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>
       </div>

   </section>
  );
};

export default AddDoctor;
