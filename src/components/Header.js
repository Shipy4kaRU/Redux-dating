import classes from "./Header.module.css";

const Header = (props) => {
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
          {props.isLogIn && (
            <li>
              <a href="/">Мои покупки</a>
            </li>
          )}
          <li>
            <button onClick={props.isLogIn ? props.onExit : null}>{`${
              props.isLogIn ? "Выйти" : "Войти"
            }`}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
