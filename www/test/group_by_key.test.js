const { group_by_key } = require("group_by");
const assert = require("assert");

const data = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 20 },
];

const expected = {
  "20": [
    { name: "John", age: 20 },
    { name: "Jim", age: 20 },
  ],
  "22": [
    { name: "Jane", age: 22 },
  ],
};

group_by_key(data, "age").then(result => {
  assert.deepStrictEqual(result, expected);
});