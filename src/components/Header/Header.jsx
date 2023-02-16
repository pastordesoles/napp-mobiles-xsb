import { Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <img
            src="/images/logo.webp"
            alt="Napp Mobiles"
            width="100"
            height="100"
            loading="lazy"
          />

          <Breadcrumbs />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
