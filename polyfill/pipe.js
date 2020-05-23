// pipe from left to right 

const pipe = (...func) => (arg) => func.reduce((acc, fn) => fn(acc), arg);
