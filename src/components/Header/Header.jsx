import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import HeaderStyled from "./HeaderStyled";

const Header = ({ cartContent }) => {
  return (
    <>
      <HeaderStyled>
        <div className="navigation">
          <Link to="/">
            <img
              src="/images/logo.webp"
              alt="Napp Mobiles"
              width="100"
              height="100"
              loading="lazy"
            />
          </Link>
          <Breadcrumbs />
        </div>
        <div className="cart-container">
          <AiOutlineShoppingCart
            data-testid="cart__icon"
            className="cart__icon"
          />
          <span className="cart__count">{cartContent}1</span>
        </div>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
