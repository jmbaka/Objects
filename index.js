/* QUESTION 1
 Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
 Handle of author
 content, 
 An image link posted by the author of the post
 Number of views, 
 Number of likes, */

function InstagramPost(authorHandle, postContent, imageUrl, viewsCount, likesCount) {
    this.authorHandle = authorHandle;
    this.postContent = postContent;
    this.imageUrl = imageUrl;
    this.viewsCount = viewsCount;
    this.likesCount = likesCount;
  };
//   This constructor function defines five properties: authorHandle, postContent, imageUrl, viewsCount, and likesCount. The values for these properties are passed in as arguments when the function is called.


/* QUESTION 2
Create 2 Instagram post objects from the constructor function you created above*/

let post1 = new InstagramPost('Joyce', 'Just finished an amazing hike!', './assets/hiking.jpg', 2000, 100);
let post2 = new InstagramPost('Joyce', 'Eating pizza on a Friday night!', './assets/pizza.jpg', 5000, 250);


/* QUESTION 3
 Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
 ENG - 70
 GOVT - 85
 LIT - 82
 CRK - 94 */

 /* QUESTION 3a
 Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. */
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    };
  }
  
  let musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
  console.log(musa); // { name: "Musa Dawodu", age: 19, location: "Lekki, Lagos State" }



/*  QUESTION 3b
Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above*/

function createJambScores(eng, govt, lit, crk) {
    return {
      eng: eng,
      govt: govt,
      lit: lit,
      crk: crk
    };
  };

  musa.jambScores = createJambScores(70, 85, 82, 94);
  console.log(musa); // { name: "Musa Dawodu", age: 19, location: "Lekki, Lagos State", jambScores: { eng: 70, govt: 85, lit: 82, crk: 94 } }
  
  
/*  QUESTION 4
What are the different ways you can clone an object? Give examples for each of them

a.  Object.assign() method: This method copies all enumerable own properties from one or more source objects to a target object, and returns the target object.
Example:*/

let originalObj = {a: 1, b: 2};
let clonedObj = Object.assign({}, originalObj);
console.log(clonedObj); // {a: 1, b: 2}
/*
b.  Spread operator: This method is a shorthand for Object.assign() method. It spreads the properties of an existing object into a new object.
Example:*/
let originalObj1 = {a: 1, b: 2};
let clonedObj1 = {...originalObj1};
console.log(clonedObj1); // {a: 1, b: 2}

/*
c.  JSON.parse() and JSON.stringify() methods: This method converts a JavaScript object into a JSON string, and then parse the JSON string into a new object. 
Example: */
let originalObj2 = {a: 1, b: 2};
let clonedObj2 = JSON.parse(JSON.stringify(originalObj2));
console.log(clonedObj2); // {a: 1, b: 2}
// This method only works if the object doesn't contain any non-serializable values like functions or undefined.

/*
d.  Object.create() method: This method creates a new object with the specified prototype object and properties.
Example:*/
let originalObj3 = {a: 1, b: 2};
let clonedObj3 = Object.create(Object.getPrototypeOf(originalObj3), Object.getOwnPropertyDescriptors(originalObj3));
console.log(clonedObj3); // {a: 1, b: 2}
// This method creates a new object with the same properties as the original object, but with a different prototype.

/*
e.  Iteration: This method loops through the properties of an object and copies them one by one into a new object
Example:*/
let originalObj4 = {a: 1, b: 2};
let clonedObj4 = {};

for (let prop in originalObj4) {
  if (originalObj4.hasOwnProperty(prop)) {
    clonedObj4[prop] = originalObj4[prop];
  }
}

console.log(clonedObj4); // {a: 1, b: 2}
// This method doesn't copy non-enumerable properties, and it may not work correctly for objects with complex or circular structures.


/*
QUESTION 5
As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	'Omoyele Sowore is the presidential candidate of AAC'
*/
// Here is how to use a for...in loop to log out each presidential candidate
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
 for (let party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
 }
//  This will out put
// Omoyele Sowore is the presidential candidate of AAC
// Christopher Imumolen is the presidential candidate of ACCORD
// Bola Ahmed Tinubu is the presidential candidate of APC
// Peter Obi is the presidential candidate of LP
// Rabiu Kwankwaso is the presidential candidate of NNPP
// Atiku Abubakar is the presidential candidate of PDP
