import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useState } from "react";

function App() {
  const [isFormValid, setIsFormValid] = useState(false);

  const onformValidHandler = (state) => {
    setIsFormValid(state);
  };

  const onExitHandler = () => {
    setIsFormValid(false);
  };

  return (
    <div>
      <Header isLogIn={isFormValid} onExit={onExitHandler} />
      {isFormValid && <UserProfile />}
      {!isFormValid && <Auth onFormValid={onformValidHandler} />}
      {isFormValid && <Counter />}
    </div>
  );
}

export default App;
