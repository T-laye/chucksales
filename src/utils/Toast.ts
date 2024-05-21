import { hideToast, showToast } from "@/redux/slices/toastSlice";

export const toast = ({ dispatch, message }: any) => {
  dispatch(showToast({ message }));
  setTimeout(() => {
    dispatch(hideToast());
  }, 5000);
};
