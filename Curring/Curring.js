function curr(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function (...nextArgs) {
          return curried(...args.concat(nextArgs));
        };
      }
    };
  }
  
  const sum = (a, b, c, d) => a + b + c + d;
  const func2 = curr(sum);
  console.log(func2(1)(2)(3)(4)); // Output: 10
  