import { useFormik } from 'formik'
import React from 'react'
import { json } from 'react-router-dom'

function Form() {
    const myFormik=useFormik({
      initialValues:{
        username:"",
        email:"",
        country:"",
        state:"",
        city:""
      },
      validate:(values)=>{
       let errors={}
       if(!values.username){
        errors.username="Please enter a name";
       }
       else if(values.username.length<3){
        errors.username="Length should be higher than 3"
       }
       if(!values.email){
        errors.email="Please enter a email";
       }
       else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
       }
       if(!values.country){
        errors.country="Please enter a country"
       }
       if(!values.state){
        errors.state="Please enter a state"
       }
       if(!values.city){
        errors.city="Please enter a city"
       }
       return errors;
      },
      onSubmit:(values)=>{
        console.log(values)
      }
    })
  return (
  <>
<form onSubmit={myFormik.handleSubmit}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" value={myFormik.values.username} name='username' onChange={myFormik.handleChange}
      class={`form-control ${myFormik.errors.username ? "is-invalid" :"is-valid"}` } />
      <span style={{color:'red'}}>{myFormik.errors.username}</span>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="password"  value={myFormik.values.email} class={`form-control ${myFormik.errors.email? "is-invalid" :"is-valid"}` } onChange={myFormik.handleChange} name="email" />
      <span style={{color:'red'}}>{myFormik.errors.email}</span></div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputAddress">Country</label>
    <input type="text" value={myFormik.values.country}  class={`form-control ${myFormik.errors.country ? "is-invalid" :"is-valid"}` } onChange={myFormik.handleChange} name="country" />
    <span style={{color:'red'}}>{myFormik.errors.country}</span></div>
  <div class="form-group col-md-6">
    <label for="inputAddress2">State</label>
    <input type="text" value={myFormik.values.state}  class={`form-control ${myFormik.errors.state ? "is-invalid" :"is-valid"}` }  onChange={myFormik.handleChange} name="state" />
    <span style={{color:'red'}}>{myFormik.errors.state}</span></div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" value={myFormik.values.city} class={`form-control ${myFormik.errors.city ? "is-invalid" :"is-valid"}` }  onChange={myFormik.handleChange} name="city"/>
      <span style={{color:'red'}}>{myFormik.errors.city}</span></div>
  
   </div>
  

  <button type="submit" class="btn btn-primary">Create</button>
  {/* <pre>
    <code>
  {JSON.stringify(myFormik.values)}
  </code>
  </pre>
  <pre><code>  {JSON.stringify(myFormik.errors)}</code></pre> */}
</form>
  </>
  )
}

export default Form
