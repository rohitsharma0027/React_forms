import {useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
 
    let formIsvalid = false
    if(enteredName)
    {
      formIsvalid = true;
    }

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) =>{
    setEnteredNameTouched(true)
  }

  const formSubmittionHandler = (event) => {
    event.preventDefault();

   

    if(!enteredNameIsValid) {
      return;
    }

    console.log(enteredName)
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid ? (
          <p className="error-text">Name must not be empty</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
