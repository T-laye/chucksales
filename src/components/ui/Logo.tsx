import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  w?: string;
}

const Logo: React.FC<LogoProps> = ({ w = "w-28 lg:w-48" }) => {
  return (
    <Link href="/">
      <div className={`${w}`}>
        <Image
          src="/images/chuck_logo.svg"
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
