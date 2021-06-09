import {useState, useRef} from 'react';

const SimpleInput = (props) => {

  const [enteredName,setEnteredName] = useState('')
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(true)
  const nameInputRef = useRef();

  const inputNameChangeHandler = (event)=>{
     setEnteredName(event.target.value)
  }

  const formSubmittionHandler = (event) =>{
    event.preventDefault()

    if(enteredName.trim() === '')
    {
      setEnteredNameIsValid(false)
       return;  // returns from this function execution and cancels the fucntion execution
    } 

    setEnteredNameIsValid(true)
    console.log(enteredName)
    console.log(nameInputRef.current.value)
  }

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={inputNameChangeHandler} value={enteredName}/>
        {enteredNameIsValid?'':<p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
