import classes from "./Auth.module.css";
import useValidation from "../customHooks/useValidation";

const Auth = (props) => {
  const emailValidation = useValidation((value) => value.trim().includes("@"));
  const passwordValidation = useValidation((value) => value.trim().length > 7);

  const isFormValid = emailValidation.isValid && passwordValidation.isValid;

  const submitHandler = (e) => {
    e.preventDefault();
    props.onFormValid(isFormValid);
    emailValidation.inputResetHandler();
    passwordValidation.inputResetHandler();
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailValidation.isBlur &&
              !emailValidation.isValid &&
              classes["control-error"]
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailValidation.value}
              onBlur={emailValidation.inputBlurHandler}
              onChange={emailValidation.inputEnterHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordValidation.isBlur &&
              !passwordValidation.isValid &&
              classes["control-error"]
            }`}
          >
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={passwordValidation.value}
              onBlur={passwordValidation.inputBlurHandler}
              onChange={passwordValidation.inputEnterHandler}
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
