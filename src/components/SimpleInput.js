import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== "");

  const nameInputClasses = nameInputHasError
  ? "form-control invalid"
  : "form-control";

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  let formIsvalid = false;
  if (enteredNameIsValid && enteredEmail) {
    formIsvalid = true;
  }

  const inputEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmittionHandler = (event) => {
    event.preventDefault();

    if (!(enteredNameIsValid || enteredEmailIsValid)) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput()
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError ? (
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