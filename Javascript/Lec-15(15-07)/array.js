// Array => similar datastore in one variable
// [size]

// An array is a special variable, which can hold more than one value.
// An array can hold many values under a single name, and you can access the values by referring to an index number.

// let data = [];
// let data = new  Array('Hello','World','Skill','Qode');
// let data =[10,20,30,40,50,'Hello']
// console.log(data);
// console.log(data[3]);
// data[3] = 100;
// console.log(data);
// console.log(data[3])

// let data = [10,20,30,40,50,110,220];
// console.log(data);
// console.log(data.length);

/* Array.push() => insert into last index */

// let data = [10,20,30,40,50,110,220];
// data.push(60)
// data.push(70,80,'Hello')
// console.log(data)

/* Array.pop() => remove into last position */

// let data = [10,20,30,40,50,110,220];
// data.pop()
// data.pop()
// data.pop()
// console.log(data)

/* Array.unshift() => insert first position */

// let data = [10,20,30,40,50,60];
// data.unshift(100);
// data.unshift(200,300,400);
// console.log(data);

/* Array.shift() => remove first position */

// let data = [10,20,30,40,50,60];
// data.shift();
// data.shift();
// console.log(data);

/* Array Changing Element */

// let data = [10,20,30,'Hello','Javascript'];
// data[2]='ohh!';
// data[1]=50;
// console.log(data)

/* Array.concat() (Merging) */

// let data = [10,20,30,40,50,60];
// let data1 = [70,80,'Hello'];
// console.log(data.concat(data1))

/* Array.splice() */

// splice(start , removecount , ...add)

// let data = ['Banana','Kiwi','Orange','Apple']
// data.splice(2,1)
// data.splice(2,1,'cherry',50)
// console.log(data)

/* Array.slice() */

// data.slice(start , end)

// let data = ['Banana','Kiwi','Orange','Apple','lichi'];
// console.log(data.slice(1));
// console.log(data.slice(1,3));

/* Array.Sort() */

//Alphabelt sort

// let data = ['hello','World','skill','Qode'];
// console.log(data.sort())

//numerical sort

// let data = [40,20,200,115,10,25]
// console.log(data.sort((a,b)=>a-b))    //ascending
// console.log(data.sort((a,b)=>b-a))    //descending

/* Array.reverse() */

// let data = [40,20,200,115,10,25]
// console.log(data.reverse())

// let data = ['Hello','World','Skill','Qode'];
// console.log(data.reverse())

/* Array.Max() */

// let data = [40,20,200,115,10,25]
// const maxFun = (e) => {
//     return Math.max.apply(null,e)
// }
// console.log(maxFun(data))

/* Array.Min() */

// let data = [40,20,200,115,10,25]
// const minFun = (e) => {
//     return Math.min.apply(null,e)
// }
// console.log(minFun(data))

/* Array.Includes() => check if element is exit or not */

// let data = [40,20,200,115,10,25]
// console.log(data.includes(20))

/* isArray() */

// let data = [10,20,30,40,50,110,200]
// console.log(Array.isArray(data));














/* Array.at() */

// let data = ['html','CSS','Bootstrap','Sass','Tailwind','Javascript']
//         //    0     1        2        3         4           5
//         //    -6    -5        -4       -3        -2          -1 

// console.log(data.at(-2))
// console.log(data.at(4))

/* Array.keys() */

// let data = ['html','CSS','Bootstrap','Sass','Tailwind','Javascript']

// let keys = data.keys()
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);

/* Array.values() */

// let data = ['html','CSS','Bootstrap','Sass','Tailwind','Javascript']

// let values = data.values()
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);

/* Array.fill() */

// let data = [32,25,12,50,41];

// let fill = data.fill("Hello")
// let fill1 = data.fill("Hello",2)
// let fill2 = data.fill("Hello",1,3)

// console.log(fill)
// console.log(fill1)
// console.log(fill2)

// console.log(data.fill("Hello",1,3))
// console.log(data.fill("Java"))
// console.log(data.fill("Script"))
// console.log(data.fill("Hello"))


