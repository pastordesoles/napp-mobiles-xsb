import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import HeaderStyled from "./HeaderStyled";
import { useEffect, useState } from "react";
import { storageHandler } from "../../lib/storageHandler";

const Header = () => {
  const [cartItems, setCartItems] = useState(storageHandler.get("cart") || 0);

  useEffect(() => {
    const updateProductCount = () => {
      setCartItems(storageHandler.get("cart") || 0);
    };

    window.addEventListener("storage", updateProductCount);

    return () => {
      window.removeEventListener("storage", updateProductCount);
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
          <AiOutlineShoppingCart
            data-testid="cart__icon"
            className="cart__icon"
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
