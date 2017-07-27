# Circular array

Creating an array:

```javascript
let a = CircularArray(1, 2, 3, 4, 5);
```

Indexing beyond `[0 .. a.length)` interval:

```javascript
console.log(a[5]); // 1

a[-1] = 1000;
console.log(a.toString()); // 1,2,3,4,1000
```

