// 1.
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// (1) Given the array, implement a function for generating a new array which doubles the
// quantity and price in each object.
console.log("#1-1");

function double(items) {
  const newItemsObject = [];

  items.forEach((item) => {
    const newItem = new Object();

    newItem.quantity = 2 * item.quantity;
    newItem.price = 2 * item.price;

    newItemsObject.push(newItem);
  });

  return newItemsObject;
}

console.log(double(itemsObject));

// (2) Given the array, implement a function for generating a new array which contains item
// quantity > 2 and price > 300 only.
console.log("#1-2");

function itemsFilter(items, minQuantity, minPrice) {
  return items.filter((item) => {
    return item.quantity > minQuantity && item.price > minPrice;
  });
}

console.log(itemsFilter(itemsObject, 2, 300));

// (3) Given the array, implement a function to calculate the total value of the items.
console.log("#1-3");

function calcTotalValue(items) {
  return items
    .map((item) => {
      return item.quantity * item.price;
    })
    .reduce((acc, curValue) => {
      return acc + curValue;
    });
}

console.log(calcTotalValue(itemsObject));

// 2.
const string = ` Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return 
The Sum Of  All The Elements In  An Array  `;

// Given the string, implement a function to remove all the non-alphabet characters and
// extra space in the string and convert the string to all lowercase.
console.log("#2");

function removeSpacesAndLowercase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

console.log(removeSpacesAndLowercase(string));

// 3.
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

// Implement a function to merge two arrays of objects on uuid, but first has uuid and
// name, second has uuid and role. With the not existing property, fill with null. Sort
// according to uuid after merge.
console.log("#3");

function sortArray(arr, key) {
  arr.sort((a, b) => a[key] - b[key]);
}

function mergeAndSort(arr1, arr2) {
  sortArray(arr1, "uuid");
  sortArray(arr2, "uuid");

  const newItemsObject = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let newItem = new Object();

    if (arr1[i].uuid === arr2[j].uuid) {
      newItem = { ...arr1[i] };

      newItem.role = arr2[j].role;

      i++;
      j++;
    } else if (arr1[i].uuid < arr2[j].uuid) {
      newItem = { ...arr1[i] };

      newItem.role = null;

      i++;
    } else {
      newItem = { ...arr2[j] };

      newItem.name = null;

      j++;
    }

    newItemsObject.push(newItem);
  }

  while (i < arr1.length) {
    const newItem = { ...arr1[i] };

    newItem.role = null;

    newItemsObject.push(newItem);

    i++;
  }

  while (j < arr2.length) {
    const newItem = { ...arr2[j] };

    newItem.name = null;

    newItemsObject.push(newItem);

    j++;
  }

  return newItemsObject;
}

console.log(mergeAndSort(first, second));
