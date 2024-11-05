function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const string = ["sdf", "henri", "run"];
const firstString = getFirstElement(string);

const map = new Map<string, number>();
map.set("henri", 3);

type ApiResponse<data extends object> = {
  data: data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;

const response: UserResponse = {
  data: {
    name: "henri",
    age: 10,
  },
  isError: false,
};
