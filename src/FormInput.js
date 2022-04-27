import React from 'react'

const FormInput = (props) => {

  const { label , onChange , id , ...inputProps }=props;
  return (
    <div>
      {/*  <label className='formInput'>Usernmae</label>*/}

    
        <input 
          {...inputProps} onChange={onChange}
        />
    </div>
  )
}

export default FormInput