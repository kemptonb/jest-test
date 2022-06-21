function analyzeArray(array) {
    const Object = (a) => {
        const average = a.reduce((a, b) => a + b, 0) / a.length;
        const min = Math.min.apply(Math, a);
        const max =  Math.max.apply(Math, a);
        const length = a.length;
        return{average, min, max, length};
    };
    
    const object = Object(array);
    
    return object;
  }
  module.exports = analyzeArray;