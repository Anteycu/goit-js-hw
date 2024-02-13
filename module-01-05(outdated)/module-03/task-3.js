"use strict";
const findBestEmployee = function (employees) {
  const values = Object.entries(employees);
  let name;
  let number = 0;
  for (const value of values) {
    if (value[1] > number) {
      number = value[1];
      name = value[0];
    }
  }
  return `${name} ${number}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
