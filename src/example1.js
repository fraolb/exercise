import React, { useState } from 'react'

const Example1 = () => {
    const [formData , setFormData]=useState({
        email :"",
        password:"",
        passwordConfirm:"",
        joinedNewsletter: true

    });

    function handleChange(event){
        const {name ,value , type ,checked}=event.target
        setFormData(prevData =>({
            ...prevData,
            [name]:type==="checked" ? checked : value
        }))
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder='email adress'
                className='form--input'
                value={formData.email}
                name='email'
                onChange={handleChange}
            />
            <input 
                type="password"
                placeholder='type password'
                className='form--input'
                value={formData.password}
                name='password'
                onChange={handleChange}
            />
            <input 
                type="password"
                placeholder='confirm password'
                className='form--input'
                value={formData.passwordConfirm}
                name='passwordConfirm'
                onChange={handleChange}
            />
            <div className='form--marketing'>
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="joinedNewsLetter"
                    onChange={handleChange}
                    checked={formData.joinedNewsletter}
                   
                />
                <label htmlFor='okayToEmail'>i want to join newsletter</label>
            </div>

            <button className='form--submit'>Sign-up</button>
        </form>
    </div>
  )
}

export default Example1