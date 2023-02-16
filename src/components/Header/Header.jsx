import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Napp Mobiles</h1>
      <h2>Hola</h2>
      <Outlet />
    </>
  );
};

export default Header;
