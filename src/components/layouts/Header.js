import { Fragment } from "react";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>CMS</h1>
      </header>
    </Fragment>
  );
};

export default Header;