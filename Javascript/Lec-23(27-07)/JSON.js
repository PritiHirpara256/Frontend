// JavaScript and JSON

// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.

{
    // // JSON syntax
    // {
    //     "name": "John",
    //     "age": 22,
    //     "gender": "male",

    // }
}

// In JSON, the data are in key/value pairs separated by a comma ,.

// JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.

// Note: JavaScript Objects and JSON are not the same. You will learn about their differences later in this tutorial.


// JSON Data

// JSON data consists of key/value pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon :. For example,

{
    // JSON data
    // "name": "John"
}

// Note: JSON data requires double quotes for the key.


// JSON Object

// The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,

{
    // JSON object
    // { "name": "John", "age": 22 }
}

// JSON Array

// JSON array is written inside square brackets [ ].

{
    // // JSON array
    // [ "apple", "mango", "banana"]
    // // JSON array containing objects
    // [
    //     { "name": "John", "age": 22 },
    //     { "name": "Peter", "age": 20 }.
    //     { "name": "Mark", "age": 23 }
    // ]
}

// Note: JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot contain functions as values.

// Accessing JSON Data

// You can access JSON data using the dot notation.

{
    // // JSON object
    // const data = {
    //     "name": "John",
    //     "age": 22,
    //     "hobby": {
    //     "reading" : true,
    //     "gaming" : false,
    //     "sport" : "football"
    //     },
    //     "class" : ["JavaScript", "HTML", "CSS"]
    // }

    // // accessing JSON object
    // console.log(data.name); // John
    // console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

    // console.log(data.hobby["gaming"]); // football
    // console.log(data.class[1]); // HTML
}

// We use the . notation to access JSON data. Its syntax is: variableName.key

// You can also use square bracket syntax [] to access JSON data. 

{
    // // JSON object
    // const data = {
    //     "name": "John",
    //     "age": 22
    // }

    // // accessing JSON object
    // console.log(data["name"]); // John
}

// JavaScript Objects VS JSON

// Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.

// image here...........

// Converting JSON to JavaScript Object

// You can convert JSON data to a JavaScript object using the built-in JSON.parse() function.

{
    // // json object
    // const jsonData = '{ "name": "John", "age": 22 }';
    // console.log(jsonData);
    // // // converting to JavaScript object
    // const obj = JSON.parse(jsonData);

    // // // accessing the data
    // console.log(obj); // John
}


// Converting JavaScript Object to JSON

// You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify() function. 

{
    // // JavaScript object
    // const jsData = { name: "John", age: 22 };
    // console.log(jsData);
    // // converting to JSON
    // const obj = JSON.stringify(jsData);

    // // accessing the data
    // console.log(obj);
}

// Use of JSON

// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

// JSON is language independent. You can create and use JSON in other programming languages too.


// WEB API


// Post Method
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'BMW Pencil',
//       description: 'BMW Pencil is used for Architecture.',
//       price: 5,
//       quantity: 150
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);


//   Get Method

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


// Put Mathod
/* updating title of product with id 1 */
// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT', /* or PATCH */
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'Apsara Pencil'
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);