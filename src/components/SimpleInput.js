import {useState, useRef} from 'react';

const SimpleInput = (props) => {

  const [enteredName,setEnteredName] = useState('')
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched,setEnteredNameTouched] = useState(false)
  const nameInputRef = useRef();

  const inputNameChangeHandler = (event)=>{
     setEnteredName(event.target.value)
  }

  const formSubmittionHandler = (event) =>{
    event.preventDefault()

    setEnteredNameTouched(true)
    
    if(enteredName.trim() === '')
    {
      setEnteredNameIsValid(false)
       return;  // returns from this function execution and cancels the fucntion execution
    } 

    setEnteredNameIsValid(true)
    console.log(enteredName)
    console.log(nameInputRef.current.value)
  }

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={inputNameChangeHandler} value={enteredName}/>
        {nameInputIsInValid?<p className="error-text">Name must not be empty</p>:''}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
