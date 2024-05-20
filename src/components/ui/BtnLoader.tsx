import { BiLoaderCircle } from "react-icons/bi";

interface BtnLoaderProps {
  css?: string;
  size?: number;
}

const BtnLoader: React.FC<BtnLoaderProps> = ({
  css = "text-dark",
  size = 28,
}) => {
  return (
    <div>
      <BiLoaderCircle size={size} className={`animate-spin mx-auto ${css}`} />
    </div>
  );
};

export default BtnLoader;
