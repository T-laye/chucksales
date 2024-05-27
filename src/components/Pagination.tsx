import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { handlePageNumber } from "@/redux/slices/variables"; // Assuming handlePageNumber is an action creator

interface PaginationProps {
  totalCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalCount }) => {
  const { take, pageNumber } = useSelector((state: any) => state.variables);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(totalCount / take);

  const handleNextPage = () => {
    if (pageNumber !== totalPages) {
      dispatch(handlePageNumber(pageNumber + 1));
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      dispatch(handlePageNumber(pageNumber - 1));
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 my-7">
      <p className="">
        Page {pageNumber} of {totalPages}
      </p>
      <IoIosArrowBack
        size={20}
        className="cursor-pointer"
        onClick={handlePrevPage}
      />
      <IoIosArrowForward
        size={20}
        className="cursor-pointer"
        onClick={handleNextPage}
      />
    </div>
  );
};

export default Pagination;
