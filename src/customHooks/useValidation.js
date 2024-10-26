import { useReducer } from "react";

const useValidation = function (func) {
  const initialState = { value: "", isBlur: false, isValid: false };

  const formStateReducer = (prevState, action) => {
    switch (action.type) {
      case "BLUR_VALUE":
        return {
          ...prevState,
          value: action.value,
          isBlur: true,
          isValid: func(action.value),
        };
      case "ENTER_VALUE":
        return {
          ...prevState,
          value: action.value,
          formState: action.input,
          isValid: func(action.value),
        };
      case "RESET_INPUT":
        return {
          ...initialState,
        };
      default:
        return { ...initialState };
    }
  };

  const inputBlurHandler = (e) => {
    dispatchFormState({ type: "BLUR_VALUE", value: e.target.value });
  };

  const inputEnterHandler = (e) => {
    dispatchFormState({ type: "ENTER_VALUE", value: e.target.value });
  };

  const inputResetHandler = () => {
    dispatchFormState({ type: "RESET_INPUT" });
  };

  const [formState, dispatchFormState] = useReducer(
    formStateReducer,
    initialState
  );

  return {
    value: formState.value,
    isBlur: formState.isBlur,
    isValid: formState.isValid,
    inputBlurHandler,
    inputEnterHandler,
    inputResetHandler,
  };
};

export default useValidation;
