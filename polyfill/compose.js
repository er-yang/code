// pipe from right to left 

const compose = (...func) => (arg) => func.reduceRight((acc, fn) => fn(acc), arg);
