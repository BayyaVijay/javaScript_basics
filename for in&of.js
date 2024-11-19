// **For-in loop**: Write a program using a `for-in` loop to print all the properties of the object`person`.


const obj = { name: "Alice", age: 25, country: "USA" };
for(keys in obj){
     console.log(`${keys}:${obj[keys]}`)
}
// **For-of loop**: Given an array `numbers = [10, 20, 30, 40, 50]`, use a `for-of` loop to calculate the
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers) {
sum += num;
}
console.log(sum)
// 3. **Object.freeze()**: Create an object and freeze it. Try modifying a property and explain what
// happens.
// Input: const person = { name: "Alice", age: 25 };
// Object.freeze(person);
// person.age = 30;
// Output: The age property will remain 25, and attempting to change it will have
// no effect.
// const person = { name: "Alice", age: 25 };
// Object.freeze(person.age)
// person.name="vijay";
//  person.age=45;
// person.sale="free";
// console.log(person)
const person = { name: "Alice", age: 25 };
Object.freeze(person)
person.name="vijay";
 person.age=45;
person.sale="free";
console.log(person)
//3 *Object.seal()*: Use Object.seal() to prevent adding new properties. Then, try adding a
// property and explain.
// Input: const person = { name: "Alice" };
// Object.seal(person);
// person.age = 25;
// Output: The new property "age" will not be added. Sealing prevents adding new properties but
// allows modifying existing ones.
const per = { name: "Alice" };
 Object.seal(per);
per.age = 25;
per.name="indu"
console.log(per)
// 5. *Object.keys()*: Write a function that returns all the keys of an object using Object.keys().
// Input: const person = { name: "Alice", age: 25, country: "USA" };
// Object.keys(person);
// Output: ["name", "age", "country"]
 const thala = { name: "Alice", age: 25, country: "USA" };
 console.log(Object.keys(thala))
// 6. *Object.values()*: Create an object and return an array of its values using Object.values().
// Input: const person = { name: "Alice", age: 25, country: "USA" };
// Object.values(person);
// Output: ["Alice", 25, "USA"]
const one = { name: "Alice", age: 25, country: "USA" };
console.log(Object.values(one))
// 7. *Object.entries()*: Use Object.entries() to convert an object to an array of key-value pairs.
// Input: const person = { name: "Alice", age: 25 };
// Object.entries(person);
// Output: [["name", "Alice"], ["age", 25]]
const person = { name: "Alice", age: 25 };
const mappig=Object.entries(person);
mappig.forEach((value,index)=>console.log(`${value[0]} : ${value[1]}`))
// 8. *For-in loop with nested objects*: Write a for-in loop to print nested properties of an object.
// Input: const student = { name: "John", subjects: { math: 90, english: 85 } };
// Output: name: John
// subjects: [object Object]
// math: 90
// english: 85
//  const vijay = { name: "John", subjects: { math: 90, english: 85 } };

const stu= { name: "John", subjects: { math: 90, english: 85 } };
for(keys in stu){
    console.log(`${keys}:${stu[keys]}`)
    for(keys in stu.subjects){
        console.log(`${keys}:${stu.subjects[keys]}`)
    }
}
// 9. *Combining for-in with Object methods*: Iterate over an object and log both keys and values
// using Object.values() for comparison.
// Input: const student = { name: "John", age: 25, subject: "Math" };
// for (let key in student) {
// console.log(key + ": " + student[key]);
// }
// Object.values(student).forEach(value => console.log(value));
// Output: name: John
// age: 25
// subject: Math
// John
// 25
// Math
 const student = { name: "John", age: 25, subject: "Math" };
for (let key in student) {
console.log(key + ": " + student[key]);
}
Object.values(student).forEach(value => console.log(value));
// 10. *Prevent Property Modification*: Create an object with a property, freeze it, and attempt to add
// or modify properties.
// Input: const person = { name: "Alice" };
// Object.freeze(person);
// person.name = "Bob";
// person.age=25;

 const son = { name: "Alice" };
Object.freeze(son);
son.name = "Bob";
son.age=25;
console.log(son)












