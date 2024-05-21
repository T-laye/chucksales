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

export const capitalize = (sentence: string): string => {
  return sentence
    ?.split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(" ");
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (date) {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options)?.format(
      date
    );

    // Remove ordinal suffix if any (optional, based on your regex logic)
    const formattedDateTime = formattedDate.replace(
      /(\d+)(th|st|nd|rd)/,
      "$1$2"
    );
    return formattedDateTime;
  } else {
    return "";
  }
};

// Example usage
const dateString: string = "2024-05-21T10:00:00Z";
const formattedDate: string = formatDate(dateString);
console.log(formattedDate); // Output: "21 May 2024, 10:00"
