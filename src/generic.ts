const wrapInArray = <anyType>(value: anyType) => {
  return [value];
};
// const strWrap = wrapInArray("abcd");
// const numWrap = wrapInArray(1234);
// or
const strWrap = wrapInArray<string>("abcd");
const numWrap = wrapInArray<number>(1234);

strWrap.map((item) => item.toUpperCase());

// 2nd uses

interface user {
  name: string;
  role: string;
}
interface blog {
  title: string;
  description: string;
  date: string;
}

interface apiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type userResponse = apiResponse<user>;
type blogResponse = apiResponse<blog>;

const userRes: userResponse = {
  data: {
    name: "modna",
    role: "user",
  },
  success: true,
  statusCode: 3344,
};

const blogRes: blogResponse = {
  data: {
    title: "Top news",
    description: "aadfgfgfdag",
    date: "12/12/12",
  },
  success: false,
  statusCode: 555,
};
