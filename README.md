# json-nested-find

Finds and exports all values of given key from an unknown structured json object, array or array of objects.

- Recursive lookup
- No aditional dependency
- Small size(4kb)

## Install

```
npm i json-nested-find@latest
```

## Basic Usage

```javascript
const jsonfind = require("json-nested-find");

// example json object
let sample = [
  { author: "Jack London", book: "The Call of the Wild", year: 1903 },
  { author: "Tolstoy", book: "War and Peace" },
  { author: "Dostoevsky", book: "Crime and Punishment" },
  { author: "Dostoevsky", book: "The Brothers Karamazov" },
  {
    nested: {
      another: [{ author: "M.Kemal Atatürk", book: "Nutuk", year: 1927 }]
    }
  }
];

// call jsonfind's All function (the only function of this dependency right now)
// 2nd parameter is used for a key to search, "author" in this example.

// outputs (return a Set)

console.log(jsonfind.All(sample, "author"));
// Set { 'Jack London', 'Tolstoy', 'Dostoevsky', 'M.Kemal Atatürk' }

console.log(jsonfind.All(sample, "year"));
// Set { 1903, 1927 }
```
