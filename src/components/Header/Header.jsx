import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import HeaderStyled from "./HeaderStyled";
import { useEffect, useState } from "react";
import { storageHandler } from "../../lib/storageHandler";

const Header = () => {
  const [cartItems, setCartItems] = useState(storageHandler.get("cart") || 0);

  useEffect(() => {
    const updateCartCount = () => {
      setCartItems(storageHandler.get("cart") || 0);
    };

    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

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
          <FontAwesomeIcon
            data-testid="cart__icon"
            className="cart__icon"
            icon={faBasketShopping}
          />
          <span className="cart__count" data-testid="cart__count">
            {cartItems.data || 0}
          </span>
        </div>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
