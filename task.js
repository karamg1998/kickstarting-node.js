let array = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];

let b=array.map(index => index==''? index+'empty string':index);

console.log(b);