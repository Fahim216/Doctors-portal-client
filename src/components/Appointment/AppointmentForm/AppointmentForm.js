import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const AppointmentForm = ({ modalIsOpen, closeModal, AppointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{ 
    
    data.service=AppointmentOn;
    data.date=date;
    data.created=new Date();
    fetch('http://localhost:5000/addAppointment',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
     
    })
 
    .then(success=>{
      if(success){
      alert('Your appointment is successfully created');
        closeModal();
       
        
      }
      
    })




      
    };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brand">{AppointmentOn}</h2>
        <p className="text-secondary text-center" ><small>on {date.toDateString()}</small></p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              
              {...register("number", { required: true })}
              name="number"
              type="number"
              placeholder="Phone Number"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                name="gender"
                {...register("gender", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("age", { required: true })}
                className="form-control"
                name="age"
                placeholder="Your Age"
                type="number"
              />
              {errors.age && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("weight", { required: true })}
                className="form-control"
                name="weight"
                placeholder="Weight"
                type="number"
              />
              {errors.weight && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <div className="form-group text-right">
            <button onSubmit={handleSubmit(onSubmit)} className="btn btn-primary mt-3"type="submit">send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
