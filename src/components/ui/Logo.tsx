/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  w?: string;
}

const Logo: React.FC<LogoProps> = ({ w = "w-28 lg:w-48" }) => {
  return (
    <Link href="/">
      <div className={`${w}`}>
        <img
          src="/images/chuck_logo.png"
          alt="Chucksales Logo"
          width={700}
          height={700}
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
