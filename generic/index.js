function getFirstElement(array) {
    return array[0];
}
var numbers = [1, 2, 3];
var firstNum = getFirstElement(numbers);
var string = ["sdf", "henri", "run"];
var firstString = getFirstElement(string);
var map = new Map();
map.set("henri", 3);
var response = {
    data: {
        name: "henri",
        age: 10,
    },
    isError: false,
};
