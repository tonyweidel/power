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
  let T = mtrx;
    for(let j=0;j<p;j++){
      let W = mtrx;
      let mitchell = W.prod(T);
      T = Matrix(mitchell);
    }
    return T;
}

//testing code
console.log(power(A,10)());
