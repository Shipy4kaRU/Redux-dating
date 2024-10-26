import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.userAuthSlice.isUserLoggedIn);

  return (
    <div>
      <Header />
      {isAuth && <UserProfile />}
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </div>
  );
}

export default App;
