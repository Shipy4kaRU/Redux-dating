import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { userAuthSliceActions } from "./store/index";

function App() {
  const isAuth = useSelector((state) => state.userAuthSlice.isUserLoggedIn);
  const dispatchFunction = useDispatch();

  const onExitHandler = () => {
    dispatchFunction(userAuthSliceActions.signOut());
  };

  return (
    <div>
      <Header isLogIn={isAuth} onExit={onExitHandler} />
      {isAuth && <UserProfile />}
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </div>
  );
}

export default App;
