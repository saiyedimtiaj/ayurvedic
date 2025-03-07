export const convertToBangla = (num: number | string) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((digit) => {
      return banglaDigits[parseInt(digit)] || digit;
    })
    .join("");
};
