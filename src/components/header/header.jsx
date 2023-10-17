import React, { Fragment } from "react";
import "./header.css";
import Navbar from "./navbar";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ಜನ ಸೇವಕ</h1>
        
        <Navbar/>
      </header>
    </Fragment>
    // <Fragment>
    //   <header className={classes.header}>
    //     <h1>React Meals</h1>
    //     <HeaderCartButton onShowCart={props.onShowCart}/>
    //   </header>
    //   <div className={classes["main-image"]}>
    //     <img src={mealsImage} alt="A table full of delicious food!" />
    //   </div>
    // </Fragment>
  );
};

export default Header;
