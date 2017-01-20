const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
  let t = Matrix(mtrx.prod(mtrx));
    for(let c=0; c<p;c++){
      let w = mtrx;
      let mitchell = w.prod(t);
      c = Matrix(mitchell)
    }
    return t;
}

//testing code
console.log(power(A,10));
