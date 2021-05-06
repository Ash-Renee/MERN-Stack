// // GIVEN
// console.log(example);
// var example = "I'm the example!";


console.log(hello);
var hello = 'world';
// i'm gonna see world
//it was undefined.  this was because well i'm not too sure TBH


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}  //this should give some type of runtime error because of the order of the code
//the answer was magnet because of hoisting and how magnet superceded haystack and i have no idea how the function played into this


// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //log only ok then super cool because fuccntion first
// //i was wrong due to super ceeding?

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
//log chicken; log gone
//ok half right, it was h/c instead of gone beccause i think we logged then reset the variable??


// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//chicken, chicken, fish fish??
//broke because of syntax error with the mean.  it's like wtf is this and why is it here?  HALP HALP HALP I NEED AN ADULT!


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// ok let's a see, log disco(sucks), r and b twice
//undefined, rock, rand b, and disco...yea i don't ge tit

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//ok so based on the previous, san jose, but it's gonna break even before that beccause of the learn line, like i dunno chief

//well fuck, ok 


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//log chi and berkley, then true
// ah ok because it's like ok it's closed but WHAT IS CLOSED HALP HALP HALP



































