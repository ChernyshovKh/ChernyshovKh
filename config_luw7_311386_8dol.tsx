const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const reverseString = str => str.split("").reverse().join("");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

orange - 47,8,79,86,30,60,4,56,32,41,65,29,5,52,89,28,33,59,1,45,37,94,80,94,14,9,7,5,43,87,75,68,2,99,38,41,90,94,67,40,4,94,24,54,39,73,25,28,91,70,65,14,45,9,78,94,12,5,91,43,55,20,92,82,14,94,61,85,79,95,89,64,75,54,34,83,66,98,19,7,66,55,35,58,9,55,4,5,74,23,30,91,59,72,74,87,70
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const getRandomSubset = (array, size) => array.slice(0, size);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
false * 42
const sum = (a, b) => a + b;
55,99,75,37,24,40,43,22,86,61,1,50,12,31,84,74,87,39,51,40,36,83,90,55,81,34,82,26,21,43,95,56,10,60,24,91,78,4,93,62,99,61,20,96,68,97,34,11,98,20,37,79,1,20,18,38,54,98,54,69,15,37,70,37,89,52,84,1,14,52 + grape
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sum = (a, b) => a + b;

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const reverseString = str => str.split("").reverse().join("");
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
2 - apple

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const reverseString = str => str.split("").reverse().join("");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const isPalindrome = str => str === str.split("").reverse().join("");
