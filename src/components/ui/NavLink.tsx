import Link from "next/link";
import React from "react";

interface NavLinkProps {
  title?: string;
  url?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, url }) => {
  return (
    <li className="">
      {url ? (
        <Link legacyBehavior href={url}>
          <a className="hover:text-primary duration-150">{title}</a>
        </Link>
      ) : (
        <span className="hover:text-primary duration-150">{title}</span>
      )}
    </li>
  );
};

export default NavLink;
