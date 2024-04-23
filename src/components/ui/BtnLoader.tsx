import { BiLoaderCircle } from "react-icons/bi";

interface BtnLoaderProps {
  css?: string;
}

const BtnLoader: React.FC<BtnLoaderProps> = ({ css = "text-dark" }) => {
  return (
    <div>
      <BiLoaderCircle size={28} className={`animate-spin mx-auto ${css}`} />
    </div>
  );
};

export default BtnLoader;
