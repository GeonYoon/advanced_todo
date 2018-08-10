import React from 'react';
import './css/Form.css'

const Form = ({ color, value, onCreate, onChange, onKeyPress}) => {
 return (
   <div className = " form">
        <input value = {value} onChange ={onChange} onKeyPress={onKeyPress} style={{color}} />
        <div className="create-button" onClick={onCreate}>
            Add
        </div>
   </div>
 );  
}

export default Form;