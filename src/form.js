import React, { useState } from 'react'
import FormInput from './FormInput'

const Form = () => {
    const [values,setValues]=useState({
      username:"",
      email:"",
      birthday:"",
      password:""
    })
    //const usernameRef = useRef()
   
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
    }

    const inputs =[
      {
        id:1,
        name:"username",
        type:"text",
        placeholder:"Username",
        label:"Username"
      },
      {
        id:2,
        name:"email",
        type:"text",
        placeholder:"Email",
        label:"Email"
      },
      {
        id:3,
        name:"birthday",
        type:"text",
        placeholder:"Birth day",
        label:"Birth day"
      },
      {
        id:4,
        name:"password",
        type:"password",
        placeholder:"Pass word",
        label:"Pass word"
      }
    ];

    const onChange =(e)=>{
      setValues({...values, [e.target.name]:e.target.value});
    };

   
  return (
  <div>
     <form onSubmit={handleSubmit}>
       {inputs.map((input)=>(
         <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}
        /> 
       ))}
     
       <button>submit</button>
     </form>
 
     
 </div>
  )
}

export default Form

//function handleChange(e){
//    setFirstName([e.target.value])

