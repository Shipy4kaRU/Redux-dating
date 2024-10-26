import { useDispatch, useSelector } from "react-redux";
import { userAuthSliceActions } from "../store/userAuthSlice";
import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => state.userAuthSlice.isUserLoggedIn);
  const dispatchFunction = useDispatch();

  const onExitHandler = () => {
    dispatchFunction(userAuthSliceActions.signOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          {isAuth && (
            <li>
              <a href="/">Мои покупки</a>
            </li>
          )}
          <li>
            <button onClick={isAuth ? onExitHandler : null}>{`${
              isAuth ? "Выйти" : "Войти"
            }`}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
