import React from "react";
// import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./header.styles";
// import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    // <div className="header">
    <HeaderContainer>
      {/* <Link className="logo-container" to="/"> */}
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      {/* </Link> */}
      {/* <div className="options"> */}
      <OptionsContainer>
        {/* <Link className="option" to="/shop"> */}
        <OptionLink to="/shop">SHOP</OptionLink>
        {/* </Link> */}
        {/* <Link className="option" to="/shop"> */}
        <OptionLink to="/shop">CONTACT</OptionLink>
        {/* </Link> */}
        {currentUser ? (
          // <div className="option" onClick={() => auth.signOut()}>
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          // </div>
          // <Link className="option" to="/signin">
          <OptionLink to="/signin">SIGN IN</OptionLink>
          // </Link>
        )}
        <CartIcon />
      </OptionsContainer>
      {/* </div> */}
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
