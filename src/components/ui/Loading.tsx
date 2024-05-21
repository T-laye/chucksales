import { BiLoaderCircle } from "react-icons/bi";

export default function Loading() {
  return (
    <div className=" h-full  overflow-hidden w-full flex justify-center items-center">
      <BiLoaderCircle
        size={250}
        className="animate-spin mx-auto text-primary"
      />
    </div>
  );
}
