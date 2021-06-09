import {useState, useRef} from 'react';

const SimpleInput = (props) => {

  const [enteredName,setEnteredName] = useState()

  const inputNameChangeHandler = (event)=>{
     setEnteredName(event.target.value)
  }

  const formSubmittionHandler = (event) =>{
    event.preventDefault()
    console.log(enteredName)
  }
  
  return (
    <form onSubmit={formSubmittionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputNameChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
