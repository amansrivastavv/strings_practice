//Q: Count how many times a character appears in a string

const str= "amansrivastava";
const count = str.split('').filter(char=>char ==='a').length;
console.log(`The character 'a' appears ${count} times in the string.`);

