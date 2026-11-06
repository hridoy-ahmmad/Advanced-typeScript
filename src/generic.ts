const wrapInArray = <anyType>(value: anyType) => {
  return [value];
};
const strWrap = wrapInArray("abcd");
const numWrap = wrapInArray(1234);

strWrap.map((item) => item.toUpperCase());
