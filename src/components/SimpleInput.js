import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail,setEnteredEmail] = useState("")
  const [enteredEmailTouched,setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes('@');

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  let formIsvalid = false;
  if (enteredName && enteredEmail) {
    formIsvalid = true;
  }

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const formSubmittionHandler = (event) => {
    event.preventDefault();

    if (!(enteredNameIsValid || enteredEmailIsValid)){
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail)
    setEnteredName("");
    setEnteredEmail("")
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={inputEmailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
         {emailInputIsInValid ? (
          <p className="error-text">Email must not be empty</p>
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