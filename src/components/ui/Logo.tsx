import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="w-28 lg:w-48">
        <Image
          src="/images/chuck_logo.svg"
          alt="Chucksales Logo"
          width={500}
          height={500}
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  );
}
