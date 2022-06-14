function calc(a, b, op) {

    let calculate = {
        add: (a, b)=>{return a + b;},
        sub: (a, b)=>{return a - b;},
        mult: (a, b)=>{return a * b;},
        div: (a, b)=>{return a / b;}
    }

    calculate.op(a, b);


  }
  module.exports = calc;