"use client";
import { useSelector } from "react-redux";

const Toast = () => {
  const { message, visible } = useSelector((state: any) => state.toast);
  console.log();
  return (
    <>
      {visible && (
        <div
          className={`${
            visible
              ? "translate-x-0 duration-200"
              : "translate-x-[200%] duration-200"
          }  fixed z-[1000] top-5 right-4 h-[60px] duration-200  flex items-center justify-center gap-4`}
        >
          <div
            className={`bg-primary opacity-95 text-white text-center py-2 px-3 max-w-[515px] min-w-[150px] rounded-lg`}
          >
            <p className="text-sm lg:text-base">{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
