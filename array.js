let arr = ["felix", "lissy", "thomas", "pen", "love", "family", "day", "live"];

/* 1- Splice */

/* splice: from index X (the first paramenter) remove X element(the second parameter) */

arr.splice(3, 2);

/*  splice: replace elements with (the 3th paramenter and other)  */

arr.splice(3, 5, "we", "are", "the", "family");

/*  insert the elements without any removals. The splice method is also able to insert the elements without any removals */

arr.splice(3, 0, "we", "are", "the", "family");

/*  Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here: */
let array = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4

array.splice(-1, 0, 3, 4);

/* 2- While */

let arrayW = [1, 2, 3, 4, 5, 6];
let i = 0;
while (i < 5) {
  arrayW[i];
  console.log(arrayW[i]);
  i++;
}

//console.log("arrayW", arrayW);

//for

for (let i = 0; i < arrayW.length; i++) {
  console.log("iterating my for");
}

// map

const newArray = arrayW.map((item) => {
  return item + 1;
});
console.log("newArray", newArray);
