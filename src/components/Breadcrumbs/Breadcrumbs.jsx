import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import BreadcrumbsStyled from "./BreadcrumbsStyled";

const routes = [
  {
    path: "/phone/:phoneId",
    breadcrumb: "Detail",
  },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <BreadcrumbsStyled>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb} /
        </NavLink>
      ))}
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
