import {useState, useRef} from 'react';

const SimpleInput = (props) => {

  const [enteredName,setEnteredName] = useState()
  const nameInputRef = useRef();

  const inputNameChangeHandler = (event)=>{
     setEnteredName(event.target.value)
  }

  const formSubmittionHandler = (event) =>{
    event.preventDefault()
    console.log(enteredName)
    console.log(nameInputRef.current.value)
  }

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={inputNameChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
