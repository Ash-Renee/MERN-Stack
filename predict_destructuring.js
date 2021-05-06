// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
// i'm prediccting that we will get a random car then a seccond random car
// after running it multiple times it kept coming up with tesla and mercedes.  My guess is that since we are not using a rand val,
// it only gives us the first two consistently


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);
//name no longer exists so nothing (might throw an error of some type of non defintion), then we should get fuckhead for the other one
// ya so name is not defined therefore shit broke

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);
// person person because of the hashing
// we got the pw and undefined.  i guess because the hash wasn't real, and we logged the pw and just said do this and we really didn't
// say what it was so it was like bruh i got nothing


// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

//i've no idea at all
// k so it's false and true.  no idea why
//so each comma is an index position and the NUMBER is the final index positon, so with the first one,
//it's comparing index[1] and index[4], whicch is 2 and 6, hence false


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//value, returns the array, returns 1, and either false/gonna break this bish
// ok the last one beccause of hte comma and shit, gives back pos 1, which was 5





