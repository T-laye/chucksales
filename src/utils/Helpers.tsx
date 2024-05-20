export const startCounting = (
  target: number,
  setCount: (count: any) => void
) => {
  const intervalDuration = 10; // Set the interval duration in milliseconds

  const interval = setInterval(() => {
    setCount((prevCount: number) => {
      // Don't specify type for prevCount
      const currentCount = prevCount; // Type assertion to specify prevCount as a number
      if (currentCount >= target) {
        clearInterval(interval);
        return target;
      }
      return currentCount + 1;
    });
  }, intervalDuration);

  // Cleanup the interval when the component is unmounted
  return () => clearInterval(interval);
};

 export const convertToNumber = (value: bigint) => {
   const string = Number(value);
   return string;
 };