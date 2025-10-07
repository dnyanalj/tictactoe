// Original object with nested object
let original = {
  name: "Dnyanal",
  address: {
    city: "Pune",
    pin: 411001,
  },
};

// -------- Shallow Copy --------
let shallowCopy = { ...original }; // or Object.assign({}, original)

// Modify nested object in shallow copy
shallowCopy.address.city= "qwert";
shallowCopy.name = "rohan";

console.log("Shallow copy: ", shallowCopy);
console.log("Original (after shallow copy change):", original);
// 👉 Output: Mumbai (changes reflect in original)

// -------- Deep Copy --------
let deepCopy = JSON.parse(JSON.stringify(original));

// Modify nested object in deep copy
deepCopy.address.city = "Delhi";

console.log("Original (after deep copy change):", original.address.city);
// 👉 Output: Mumbai (unchanged, deep copy is separate)

console.log("Deep Copy:", deepCopy.address.city);
// 👉 Output: Delhi
