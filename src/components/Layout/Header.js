import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

import mealsImg from './../../assets/meals.webp';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
