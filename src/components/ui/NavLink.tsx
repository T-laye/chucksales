import Link from "next/link";
import React from "react";

interface NavLinkProps {
  title?: string;
  url?: string;
  css?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ css, title, url }) => {
  return (
    <li className="">
      {url ? (
        <Link legacyBehavior href={url}>
          <a className={`${css} hover:text-primary duration-150`}>{title}</a>
        </Link>
      ) : (
        <span className={`${css} hover:text-primary duration-150`}>
          {title}
        </span>
      )}
    </li>
  );
};

export default NavLink;
